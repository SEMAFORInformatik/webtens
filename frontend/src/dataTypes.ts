/**
 * Type definitions of all components and communications
 * Every attribute that has to be accessed must be declared in this file
 */

import { in_proto } from "./proto";

export type ControlCommand =
  | "MAP"
  | "UNMAP"
  | "GUIELEMENT_METHOD"
  | "BITMAP"
  | "FOLDERTAB"
  | "GOCYCLE"
  | "NEWCYCLE"
  | "CLEARCYCLE"
  | "DELETECYCLE"
  | "RENAMECYCLE";

export type QueueState = "Idle" | "Sending" | "Receiving" | "Query";

export interface CtxOption {
  label?: string;
  type?: in_proto.GuiElement.Type;
  checked?: boolean;
  callback?: Function;
  submenu?: CtxOption[];
}

export interface IntensResponseFolder {
  active: number;
  ids: number[];
  visiblePages: boolean[];
}

export interface IntensResponseFunction {
  exit: boolean;
  message: string;
  name: string;
  open_url: string;
  status: string;
}

export interface IntensResponse {
  cycle: string[];
  context: any;
  elements: in_proto.ElementList;
  clipboard?: { text: string };
  folders: in_proto.WebAPIResponse.FolderUpdate[];
  forms: string[];
  form_top_name: string;
  function: IntensResponseFunction;
  data?: string;
  method?: string;
}

export type QueryCommand = MessageBoxCommand | ConfirmCommand | ConsistencyCommand | FileSaveCommand | FileOpenCommand | FileURLCommand;

export interface MessageBoxCommand {
  command: "messagebox" | "information" | "warning";
  title?: string;
  message?: string;
  image?: string;
  progress?: number | string;
}

export interface ConfirmCommand {
  command: "confirm" | "confirm_cancel" | "getText" | "getClipboard";
}

export interface FileOpenCommand {
  command: "file_open";
}

export interface FileURLCommand {
  command: "file_url";
  fileURL: string;
}

export interface ConsistencyCommand {
  command: "consistency_check";
}

export interface FileSaveCommand {
  command: "file_save";
  data: string;
  directory: string;
  basename: string;
  filter: string;
  mimetype: "application/json" | "application/xml" | "text/html" | "text/plain";
  mode: string;
  title: string;
}

export interface Response {
  0: { status: string, protoIndex: number, protoReplyType: "FORM" | "WEBAPI"};
  1?: IntensResponse | Buffer;
  2?: IntensResponse | Buffer;
}

export interface ResponseWithID {
  id: string;
  response: Response;
}

export interface Event<T> {
  data: {
    id: number;
    context: any;
    message: {
      name: string;
      body: T;
    };
    waitForSecondResponse?: boolean;
  };
  resolve: Function;
  reject: Function;
}

export interface FormDescription {
  elements: IntensComponentData[];
  title: string;
  main: boolean;
  modal: boolean;
}

export type IntensComponentData =
  | IntensBaseData
  | IntensButtonData
  | IntensContainerData
  | IntensCycleButtonData
  | IntensFieldgroupData
  | IntensFolderData
  | IntensHeaderData
  | IntensIndexData
  | IntensInputData
  | IntensInputSliderData
  | IntensLabelData
  | IntensListData
  | IntensPlot2DData
  | IntensMenubarButtonData
  | IntensMenubarPulldownData
  | IntensMenubarToggleButtonData
  | IntensNavigatorData
  | IntensPixmapData
  | IntensRadioData
  | IntensSelectData
  | IntensTextData
  | IntensToggleData
  | IntensTableData;

export interface IntensBaseData {
  id?: string;
  class?: string;
  fullName?: string;
  action?: string;
  type: string;
  name?: string;
  updated?: boolean;
  colspan?: number;
  rowspan?: number;
  bgcolor?: string;
  fgcolor?: string;
  form_name: string;
  enabled: boolean;
}

export interface IntensButtonData extends IntensBaseData {
  datatype: string;
  editable: boolean;
  helptext: string;
  label: string;
  length: number;
  name: string;
  pixmap?: boolean;
  scale: number;
  typeLabel: boolean;
  value: string;
  visible: boolean;
  icon: string;
}

export interface IntensContainerData extends IntensBaseData {
  element: IntensComponentData[];
  expand: string;
  orientation: string;
  title?: string;
}

export interface IntensCycleButtonData extends IntensBaseData {
  cycle: number;
  label: string;
  list_cycle: string[];
  name: string;
  num_cycle: number;
}

export interface IntensFieldgroupData extends IntensBaseData {
  element: IntensComponentData[][];
  expand: string;
  frame: boolean;
  label: string;
  name: string;
  orientation: string;
  visible: boolean;
  heigth: number;
  width: number;
  grid_template_columns: string;
}

export interface IntensFolderData extends IntensBaseData {
  active: number;
  buttons: boolean;
  buttonAlignment: "top" | "bottom";
  expand: string;
  name: string;
  pages: (IntensComponentData & { active: boolean; pageid: number; visible?: boolean; label: string })[];
  width: number;
}

export interface IntensHeaderData extends IntensBaseData {
  left_icon: string;
  right_icon: string;
  subtitle: string;
  title: string;
}

export interface IntensIndexData extends IntensBaseData {
  disabled: boolean;
  index: number;
  min: number;
  max: number;
  new_index: number;
  orientation: string;
  step: number;
  visible: boolean;
}

export interface IntensInputSliderData extends IntensBaseData {
  min: number;
  max: number;
  step: number;
}

export interface IntensInputData extends IntensBaseData {
  datatype: string;
  editable: boolean;
  gui_value: string;
  helptext: string;
  formatted_value?: string;
  label: string;
  length: number;
  max_value: number;
  min_value: number;
  pattern_value: string;
  precision?: number;
  name: string;
  scale: number;
  unit?: string;
  typeLabel: boolean;
  value: string | number;
  range: IntensInputSliderData;
}

export interface IntensLabelData extends IntensBaseData {
  alignment: string;

  label: string;
  icon?: string;
  type: string;
}
export interface IntensListDataPopupMenu extends IntensNavigatorNodePopupMenu {}
export interface IntensListElement {
  datatype: string;
  fullname: string;
  label: string;
  width: number;
  optional: boolean;
  values: string[];
}

export interface IntensListData extends IntensBaseData {
  element: IntensListElement[];
  expand: string;
  name: string;
  rowCount: number;
  selected: number[];
  multi_selection: boolean;
  popup_base_menu: IntensListDataPopupMenu;
  width: number;
}

export interface IntensPlot2DData extends IntensBaseData {
  XAxis: IntensPlot2DAxis;
  Y1Axis: IntensPlot2DAxis;
  Y2Axis: IntensPlot2DAxis;
  expand: string;
  header_text: string;
  menu_label: string;
  name: string;
  plotitems: IntensPlot2DItem[];
  visible: boolean;
  width: number;
  height: number;
  min_x: number;
  max_x: number;
  fixed_height?: number;
  fixed_width?: number;
  x_axis_range?: [number, number];
  y_axis_range?: [number, number]
  y2_axis_range?: [number, number]
  xAnnotation: {label: string; pos: number}[]
}

export interface IntensPlot2DAxis {
  fieldwith: number;
  logarithmic: boolean;
  m_fmt: number;
  origin: number;
  originDefined: boolean;
  precision: number;
  scaleEnable: boolean;
  style?: string;
  title: string;
}

export interface IntensPlot2DItem {
  axis: axisName;
  label: string;
  legend: boolean;
  is_marker: boolean;
  marker: {label: string, background?: string, foreground?: string}[];
  max_range: number;
  min_range: number;
  lineColor: string;
  lineStyle: number;
  lineStyleString: string;
  symbolColor: string;
  symbolSize: number
  symbolStyle: number
  symbolStyleString: string;
  npoints: number;
  x: number[];
  y: number[];
}

export type axisName = "XAxis" | "Y1Axis" | "Y2Axis";

export interface IntensMenubarButtonData extends IntensBaseData {
  label: string;
  type: 'MenuToggle' | 'Separator' | 'PulldownMenu';
  map_action?: string;
  disable?: boolean;
  element?: IntensMenubarButtonData[];
}

export interface IntensMenubarPulldownData extends IntensBaseData {
  label: string;
  element: (IntensMenubarButtonData | IntensMenubarPulldownData)[];
  mnemonic: string;
  name: string;
  radio: boolean;
  tearOff: boolean;
  type: string;
}

export interface IntensMenubarToggleButtonData extends IntensBaseData {
  label: string;
  type: string;
}

export interface IntensNavigatorColumn {
  label: string;
  precision: number;
  scale: number;
  style: number;
  tag: string;
  thousandSep: boolean;
  width: number;
  initialWidth: number;
}
export interface IntensNavigatorConnectionAttr {
  lineColor: string;
  lineStyle: string;
  lineWidth: number;
  lineVector: [
    [
      number,
      number
    ],
    [
      number,
      number
    ]
  ]
}

export interface IntensNavigatorData extends IntensBaseData {
  column: IntensNavigatorColumn[];
  root: [IntensNavigatorNodeData];
  default_size: boolean;
  expandable: boolean;
  scrollable: boolean;
  freezed: boolean;
  height: number;
  multi_selection: boolean;
  navigator_type: number;
  tooltip_tag: string;
  updating: boolean;
  width: number;
  connect: any[];
  connectAttr: IntensNavigatorConnectionAttr[];
}

export interface IntensNavigatorNodeData extends IntensBaseData {
  actualCount: number;
  classname: string;
  node_name: string;
  editable: boolean;
  element_type: string;
  fullName: string;
  icon: string;
  isFolder: boolean;
  isVisible: boolean;
  label: string[];
  fgcolor: string;
  labelDict: { [key: string]: string };
  level: number;
  index: number;
  name: string;
  newCount: number;
  node: IntensNavigatorNodeData[];
  popup_menu: IntensNavigatorNodePopupMenu;
  position: [number, number];
  updated: boolean;
  tooltip: string;
}

export interface IntensNavigatorNodePopupMenu {
  clearDefaultMenu: boolean;
  element: IntensNavigatorNodePopupMenuItem[];
  tearOff: boolean;
  title: string;
}

export interface IntensNavigatorNodePopupMenuItem {
  action: string;
  colspan: number;
  id: string;
  label?: string;
  rowspan: number;
  type: string;
}

export interface IntensDiagramData extends IntensNavigatorData {
  popup_menu: IntensDiagramNodePopupMenu;
  selected_item: string[];
  diagram_connection_ratio: number;
  root: [IntensDiagramNodeData];
}
export interface IntensDiagramColumn extends IntensNavigatorColumn {}
export interface IntensDiagramNodeData extends IntensNavigatorNodeData {
  tooltip: string;
  node: IntensDiagramNodeData[];
}
export interface IntensDiagramNodePopupMenu extends IntensNavigatorNodePopupMenu {
  element: IntensDiagramNodePopupMenuItem[];
}
export interface IntensDiagramNodePopupMenuItem extends IntensNavigatorNodePopupMenuItem {
  reason?: string;
}
export interface IntensIconViewNodeData extends IntensDiagramNodeData {}
export interface IntensIconViewData extends IntensDiagramData {}
export interface IntensPixmapData extends IntensBaseData {
  formatted_value: string;
  datatype: string;
  mimetype: "image/svg+xml" | "text/plain" | "text/html";
  editable: boolean;
  label: string;
  length: number;
  name: string;
  scale: number;
  typeLabel: boolean;
  updated: boolean;
  value: string;
  width: number;
  height: number;
  fullName: string;
}

export interface IntensRadioData extends IntensBaseData {
  datatype: string;
  editable: boolean;
  label: string;
  length: number;
  name: string;
  scale: number;
  typeLabel: boolean;
  value: string;
}

export interface IntensSelectData extends IntensBaseData {
  action?: string;
  dataset: string;
  dataset_input: string[];
  dataset_output: string[];
  ds_input: number;
  ds_output: number;
  editable: boolean;
  index?: number;
  fullName?: string;
  helptext?: string;
  bgcolor: string;
  columnIndex?: number;
  rowIndex?: number;
  formatted_value: string;
  length: number;
  name: string;
  style?: {
    width?: string;
    noMargin?: boolean;
  };
  hasTable?: true; // if the component is within a table
}

export interface IntensTextData extends IntensBaseData {
  datatype: string;
  editable: boolean;
  expand: string;
  label: string;
  length: number;
  precision: number;
  popup_base_menu: any;
  mimetype: string;
  name: string;
  scale: number;
  typeLabel: boolean;
  value: string;
  width: number;
  height: number;
}

export interface IntensToggleData extends IntensBaseData {
  datatype: string;
  editable: boolean;
  label: string;
  length: number;
  index?: number;
  name: string;
  scale: number;
  typeLabel: boolean;
  value: boolean;
  hasTable: boolean; // if the component is within a table
}

type TableCellType = "topleft" | "row_header" | "col_header" | "data" | "empty" | "TableToggleDataItem" | "TableComboBoxDataItem";

export interface IntensTableCell extends IntensBaseData {
  value: string | number;
  editable: boolean;
  datatype?: string;
  fullName?: string;
  fgColor?: string;
  bgColor?: string;
  scale?: number;
  action?: string;
  tooltip: string | false;
  selected: boolean;
  type: TableCellType;
  originalRow?: number;
  topOffset?: number;
  intensSelectData?: IntensSelectData;
  intensToggleData?: IntensToggleData;
  dataset?: string;
  dataset_input?: string[];
  dataset_output?: string[];
  ds_input?: number;
  ds_output?: number;
  formatted_value: string;
  label: string;
  length: number;
  precision: number;
  typeLabel: boolean;
  unit: string;
  updated: boolean;
}

export interface IntensTableData extends IntensBaseData {
  column_default_data: IntensTableCell[];
  column_header: string[];
  column_header_hidden: boolean;
  column_length: number[];
  column_offset: number;
  num_frozen_rows: number;
  num_frozen_columns: number;
  expand: string;
  height: number;
  matrix: IntensTableCell[][];
  navigation: string;
  num_columns: number;
  num_columns_visible: number;
  num_rows: number;
  num_rows_visible: number;
  orientation: string;
  row_header: string[];
  row_header_hidden: boolean;
  row_header_max_length: number;
  row_offset: number;
  title: string;
  title_horizontal: string;
  title_vertical: string;
  width: number;
  popup_base_menu: IntensTableDataPopupMenu;
  popup_header_menu: IntensTableDataPopupMenu;
  popup_header_menu_col: IntensTableDataPopupMenu;
}

export interface IntensTableDataPopupMenu extends IntensNavigatorNodePopupMenu {
  element: IntensTableDataPopupMenuItem[];
}
export interface IntensTableDataPopupMenuItem extends IntensNavigatorNodePopupMenuItem {
  reason?: string;
}

export interface IntensIndexMenuData extends IntensBaseData {
  form_name: string;
  label: string;
  popup_menu: IntensIndexMenuDataPopupMenu;
  guielement: string;
}
export interface IntensIndexMenuDataPopupMenu extends IntensTableDataPopupMenu {}
export interface IntensThermoData extends IntensBaseData {
  base: any;
  colorlist: IntensThermoColorData[];
  colorset: string;
  expand: string;
  height: number;
  width: number;
  label: string;
  max: number;
  min: number;
  offset: number;
  orientation: string;
  unit: string;
  visible?: boolean;
  scale: number;
}

export interface IntensThermoColorData {
  color: string;
  value: number;
}

export interface ExecuteFuncArgs {
  action: string;
  source: [string] | string | string[];
  source2?: string;
  reason: string;
  x_pos?: number;
  y_pos?: number;
}
export type ExecuteFunc = (arg0: ExecuteFuncArgs) => Promise<unknown>;
export interface Coords {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}

export interface Size {
  w: number;
  h: number;
}
export type PathCoords = [Coords, Coords, Coords];

// store metadata inside the name property
export interface NodeDataInJSON extends IntensDiagramNodeData {}

export interface LineDataInJSON {
  start: NodeDataInJSON | string;
  end: NodeDataInJSON | string;
}

export interface NodeConnection {
  start: fabric.Image | null;
  line: fabric.Line | null;
  end: fabric.Image | null;
}

export interface TooltipState {
  active: boolean;
  timeout_id: number | null;
  object: fabric.Object | null;
}

export enum CtxMenu {
  Name,
  Source,
}
