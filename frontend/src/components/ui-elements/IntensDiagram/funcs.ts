import * as t from "../../../dataTypes";
import { fabric } from "fabric";
import * as c from "./const";
import { in_proto } from "../../../proto";

export function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/** Format a coordinate so that intens understands it */
export function intensFormat(x: number): number {
  return Math.round(x / c.PIXEL_MAGNITUDE) || undefined;
}

/** Find the the node of a fabric image, based on the node_name */
export function matchNodeName(objects: fabric.Object[], node_name: string): fabric.Object | null {
  return objects.find(obj => JSON.parse(obj.name).nodeName === node_name);
}

/** Check if the cursor is inside the image object */
export function cursorInsideImage(ev: fabric.IEvent<MouseEvent>): fabric.Object[] {
  if (ev.target?.type === "image") {
    return [ev.target];
  }
  return [];
}

/** Draw the node objects in fabricjs */
export function drawNodes(
  canvas: fabric.Canvas,
  nodes: in_proto.INavigatorNode[],
  enabled: boolean,
) {
  for (let i in nodes) {
    const node = nodes[i];
    const imgElement = new Image();
    imgElement.src = node.icon;
    imgElement.onload = () => {
      const fabricImg = new fabric.Image(imgElement, {
        name: JSON.stringify(node),
        left: node.position.x * c.PIXEL_MAGNITUDE,
        top: node.position.y * c.PIXEL_MAGNITUDE,
        lockMovementX: !enabled,
        lockMovementY: !enabled,
        lockScalingX: !enabled,
        lockScalingY: !enabled,
        hasControls: false,
      });
      fabricImg.on("selected", () => {
        fabricImg.set("hasBorders", false);
        fabricImg.set("stroke", c.NODE_SELECTED_COLOR);
        fabricImg.set("strokeWidth", c.NODE_STROKE_WIDTH);
        fabricImg.set("strokeDashArray", c.NODE_STROKE_DASHED);
        canvas.renderAll();
      });
      fabricImg.on("deselected", () => {
        fabricImg.set("stroke", c.NODE_DESELECTED_COLOR);
        fabricImg.set("strokeWidth", c.NODE_STROKE_WIDTH_DESELECTED);
        fabricImg.set("strokeDashArray", c.NODE_STROKE_DASHED_DESELECTED);
        canvas.renderAll();
      });
      canvas.add(fabricImg);
    };
  }
}

/** Draw the connections in fabricjs */
export function drawConnections(canvas: fabric.Canvas, connections: in_proto.IConnection[],
                                connectionsAttrs: in_proto.IConnectionAttr[]) {
    //console.debug("connectionsAttrs: ", connectionsAttrs)
    for (const i in connections) {
      const connection = connections[i];
      const connectionAttrs = connectionsAttrs[i];
      const objs = canvas.getObjects();
      const startNode = matchNodeName(objs, connection.a);
      const endNode = matchNodeName(objs, connection.b);
      if (connectionAttrs.lineVectors) {
        for (let i = 1; i < connectionAttrs.lineVectors.length; i++) {
          let coords = {
          x1:connectionAttrs.lineVectors[i-1].x,
          y1:connectionAttrs.lineVectors[i-1].y,
          x2:connectionAttrs.lineVectors[i].x,
          y2:connectionAttrs.lineVectors[i].y};
          const group = createConnection(coords, startNode.name, endNode.name, connectionAttrs);
        canvas.add(group);
      }
    }
  }
}
/** Create a fabric group where the lines are stored */
export function createConnection(coords: t.Coords, startData: string, endData: string, attrs: in_proto.IConnectionAttr): fabric.Group {
  const strokeWidth = attrs?.lineWidth ?? c.LINE_STROKE_WIDTH;
  enum Angles {
    HORIZONTAL,
    VERTICAL,
    NONE
  }
  const rightAngle = coords.x1 === coords.x2 ? Angles.VERTICAL
    : coords.y1 === coords.y2 ? Angles.HORIZONTAL
    : Angles.NONE;
  const halfStroke = Math.floor(strokeWidth / 2)

  const vector = {
    // if we got a horizontal line, we want it to stand out a tiny bit in each direction based on the stroke width
    // the sign operation is to determine if we're on the left or right end of the line
    x1: rightAngle === Angles.HORIZONTAL
      ? coords.x1 + halfStroke * Math.sign(coords.x1 - coords.x2)
      : coords.x1,
    x2: rightAngle === Angles.HORIZONTAL
      ? coords.x2 + halfStroke * Math.sign(coords.x2 - coords.x1)
      : coords.x2,
    y1: rightAngle === Angles.VERTICAL
      ? coords.y1 + halfStroke * Math.sign(coords.y1 - coords.y2)
      : coords.y1,
    y2: rightAngle === Angles.VERTICAL
      ? coords.y2 + halfStroke * Math.sign(coords.y2 - coords.y1)
      : coords.y2,
  };
  //console.debug("connection line coord", vector.x1, vector.y1, vector.x2, vector.y2)
  const line = new fabric.Line([vector.x1, vector.y1, vector.x2, vector.y2], {
    stroke: attrs?.lineColor || c.LINE_COLOR,
    strokeWidth,
    strokeDashArray: attrs?.lineStyle === "DotLine" ? [2] : [],
    selectable: false
  });
  // specical case
  if (line.strokeWidth >= 1 && rightAngle === Angles.VERTICAL) {
    line.originX = 'center';
  }
  if (line.strokeWidth >= 1 && rightAngle === Angles.HORIZONTAL) {
    line.originY = "center"
  }

  const group = new fabric.Group([line], {
    name: JSON.stringify({
      start: startData,
      end: endData,
    }),
    left: Math.min(vector.x1, vector.x2),
    top: Math.min(vector.y1, vector.y2),
    hasControls: false,
    lockMovementX: true,
    lockMovementY: true,
    selectable: true,
  });
  group.on("selected", () => {
    group.set("hasBorders", false);
    group.getObjects().forEach((object) => {
      object.set("stroke", c.LINE_SELECTED_COLOR);
      object.set("fill", c.LINE_SELECTED_COLOR);
    });
    group.canvas?.renderAll();
  });
  group.on("deselected", () => {
    group.set("hasBorders", true);
    group.getObjects().forEach((object) => {
      object.set("stroke", c.LINE_COLOR);
      object.set("fill", c.LINE_COLOR);
    });
    group.canvas?.renderAll();
  });
  return group;
}

/** Delete a node */
export async function deleteNode(image: fabric.Image, execute: t.ExecuteFunc, canvasFuncs?: [Function, Function]) {
  if (image.name) {
    const nodeData: t.NodeDataInJSON = JSON.parse(image.name);
    canvasFuncs[0]()
    await execute({
      action: nodeData.action,
      source: [nodeData.fullName],
      reason: "remove_element",
    });
    canvasFuncs[1]()
  }
}

export async function deleteNodes(images: fabric.Image[], execute: t.ExecuteFunc, canvasFuncs?: [Function, Function]) {
  if (images[0].name) {
    const nodes: t.NodeDataInJSON[] = images.map((image) => JSON.parse(image.name));
    const action = nodes[0].action;
    canvasFuncs[0]();
    await execute({
      action: action,
      source: nodes.map((node) => node.fullName),
      reason: c.DELETE_MULTIPLE_ELEMENTS_REASON,
    });
    canvasFuncs[1]();
  }
}

/** Delete a connection */
export async function deleteConn(canvas: fabric.Canvas, connection: in_proto.IConnection, execute: t.ExecuteFunc, canvasFuncs?: [Function, Function]) {
  const objs = canvas.getObjects();
  const startNode = matchNodeName(objs, connection.a);
  const endNode = matchNodeName(objs, connection.b);
  if (startNode?.name && endNode?.name) {
    const startNodeData: t.NodeDataInJSON = JSON.parse(startNode.name);
    const endNodeFullData: t.NodeDataInJSON = JSON.parse(endNode.name);
    canvasFuncs[0]();
    await execute({
      action: startNodeData.action,
      source: startNodeData.fullName,
      source2: endNodeFullData.fullName,
      reason: "remove_connection",
    });
    canvasFuncs[1]();
  }
}
