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
                                connectionsAttrs: in_proto.IConnectionAttr[], diagram_connection_ratio: number) {
  //console.debug("connection ratio:", diagram_connection_ratio)
  for (const i in connections) {
    const connection = connections[i];
    const connectionAttrs = connectionsAttrs[i];
    const objs = canvas.getObjects();
    const n1 = matchNodeName(objs, connection.a);
    const n2 = matchNodeName(objs, connection.b);
    if (!n1 || !n2) continue
    let xdiff = n2.left - n1.left;
    let ydiff = n2.top - n1.top;
    let startNode = n1;
    let endNode = n2;
    // maintain data
    if (n1.width == 1) n1.width = 0;
    if (n1.height == 1) n1.height = 0;
    if (n2.width == 1) n2.width = 0;
    if (n2.height == 1) n2.height = 0;
    // find node points
    let x1pos=0, x2pos=0, y1pos=0, y2pos=0;
    let xConnection;
    if (Math.abs(xdiff) >= diagram_connection_ratio * (Math.abs(ydiff))) {
      xConnection = true;
      if (n1.left < n2.left) {
        x1pos = n1.left + (n1.left < n2.left ?  n1.width : 0);
        y1pos = n1.top + n1.height/2;
        x2pos = n2.left + (n1.left > n2.left ?  n2.width : 0);
        y2pos = n2.top + n2.height/2;
      } else {
        x1pos = n2.left + n2.width;
        y1pos = n2.top + n2.height/2;
        x2pos = n1.left;
        y2pos = n1.top + n1.height/2;
      }
    } else {
      xConnection = false ;
      if (n1.top < n2.top) {
        x1pos = n1.left + n1.width/2;
        y1pos = n1.top + n1.height;
        x2pos = n2.left + n2.width/2;
        y2pos = n2.top;
      } else {
        x1pos = n2.left + n2.width/2;
        y1pos = n2.top  + n2.height;
        x2pos = n1.left + n1.width/2;
        y2pos = n1.top;
      }
    }

    if ((startNode && endNode) || connectionAttrs.lineVectors) {
      let coords: t.Coords = connectionAttrs.lineVectors?.length > 0 ? {
        x1:connectionAttrs.lineVectors[0].x,
        y1:connectionAttrs.lineVectors[0].y,
        x2:connectionAttrs.lineVectors[1].x,
        y2:connectionAttrs.lineVectors[1].y,
      } : {
        x1:x1pos,
        y1:y1pos,
        x2:x2pos,
        y2:y2pos,
      };
      const size: t.Size = {
        w: startNode.width,
        h: startNode.height,
      };
      const group = createConnection(coords, startNode.name, endNode.name, size, connectionAttrs, xConnection || connectionAttrs.lineVectors);
      canvas.add(group);
    }
  }
}

/** Create a fabric group where the lines are stored */
export function createConnection(coords: t.Coords, startData: string, endData: string, size: t.Size, attrs: in_proto.IConnectionAttr, xConnection: boolean): fabric.Group {
  let groupElements = [];
  const path = createPath(coords, size, xConnection);
  for (let i = 0; i < 3; i++) {
    const vector = path[i];
    const line = new fabric.Line([vector.x1, vector.y1, vector.x2, vector.y2], {
      stroke: attrs?.lineColor || c.LINE_COLOR,
      strokeWidth: attrs?.lineWidth ?? c.LINE_STROKE_WIDTH,
      strokeDashArray: attrs?.lineStyle === "DotLine" ? [2] : [],
      selectable: false
    });
    // specical case
    if (line.strokeWidth >= 1 && path[0].x1 == path[2].x2) {
      line.originX = 'centerX';
    }
    groupElements.push(line);
  }

  const group = new fabric.Group(groupElements, {
    name: JSON.stringify({
      start: startData,
      end: endData,
    }),
    left: Math.min(path[0].x1, path[2].x2),
    top: Math.min(path[0].y1, path[2].y2),
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

/** Create a connection that looks line a connection in the desktop diagram application */
export function createPath(pos: t.Coords, size: t.Size, xConnection:boolean): t.PathCoords {
  const { x1, y1, x2, y2 } = pos;
  const diffX = Math.max(x1, x2) - Math.min(x1, x2);
  const diffY = Math.max(y1, y2) - Math.min(y1, y2);
  const diffX2 = diffX / 2;
  const diffY2 = diffY / 2;
  if (xConnection) {
    let v1 = {
      x1: x1,
      y1: y1,
      x2: x1 + diffX2,
      y2: y1,
    };
    let v2 = {
      x1: x1 + diffX2,
      y1: y1,
      x2: x1 + diffX2,
      y2: y2,
    };
    let v3 = {
      x1: x1 + diffX2,
      y1: y2,
      x2: x2,
      y2: y2,
    };
    return [v1, v2, v3];
  } else {
    let v1 = {
      x1: x1,
      y1: y1,
      x2: x1,
      y2: y1 + diffY2,
    };
    let v2 = {
      x1: x2,
      y1: y1 + diffY2,
      x2: x1,
      y2: y1 + diffY2,
    };
    let v3 = {
      x1: x2,
      y1: y1 + diffY2,
      x2: x2,
      y2: y2,
    };
    return [v1, v2, v3];
  }
}

