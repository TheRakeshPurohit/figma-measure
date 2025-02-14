export enum Alignments {
  TOP = 'TOP',
  BOTTOM = 'BOTTOM',
  LEFT = 'LEFT',
  RIGHT = 'RIGHT',
  CENTER = 'CENTER',
}

export interface SetTooltipOptions {
  flags: TooltipSettings;
  offset: number;
  labelPattern: string;
  position: TooltipPositions;
  vertical?: TooltipPositions;
  horizontal?: TooltipPositions;
  backgroundColor?: string;
  fontColor?: string;
  labelFontSize?: number;
  name?: string;
}
export interface LineParameterTypes {
  left: number;
  top: number;
  node: SceneNode;
  direction: string;
  name: string;
  txtVerticalAlign: Alignments;
  txtHorizontalAlign: Alignments;
  lineVerticalAlign: Alignments;
  lineHorizontalAlign: Alignments;
  strokeCap: string;
  strokeOffset: number;
  color: string;
  labels: boolean;
  labelsOutside: boolean;
  labelPattern: string;
  labelFontSize: number;
}
export interface TooltipSettings {
  width: boolean;
  height: boolean;
  fontName: boolean;
  fontSize: boolean;
  color: boolean;
  opacity: boolean;
  stroke: boolean;
  cornerRadius: boolean;
  points: boolean;
  name: boolean;
  variants: boolean;
  effects: boolean;
  onlyEffectStyle: boolean;
}

export interface PluginNodeData {
  version?: number;
  surrounding?: SurroundingSettings;
  connectedNodes?: string[];
  strokeCap?: StrokeCap;
  strokeOffset?: number;
  unit?: string;
  color?: string;
  labels?: boolean;
  labelsOutside?: boolean;
  tooltipOffset: number;
  fill?: FillTypes;
  opacity?: number;
  labelPattern: string;
  tooltip: TooltipSettings;
  detached?: boolean;
  labelFontSize?: number;
}

export interface SurroundingSettings {
  labels: boolean;
  topBar: boolean;
  leftBar: boolean;
  rightBar: boolean;
  bottomBar: boolean;
  topPadding: boolean;
  leftPadding: boolean;
  rightPadding: boolean;
  bottomPadding: boolean;
  horizontalBar: boolean;
  verticalBar: boolean;
  center: boolean;
  tooltip: TooltipPositions;
}

export type FillTypes = 'dashed' | 'fill' | 'stroke' | 'fill-stroke';

export enum TooltipPositions {
  TOP = 'TOP',
  LEFT = 'LEFT',
  BOTTOM = 'BOTTOM',
  RIGHT = 'RIGHT',
  NONE = '',
}

export interface MainMeasurements {
  labels: boolean;
  color: string;
  fill: FillTypes;
  opacity: number;
  strokeCap: StrokeCap | 'STANDARD';
  strokeOffset: number;
  surrounding: SurroundingSettings;
  tooltipOffset: number;
  tooltip: TooltipSettings;
}

export interface Store {
  labelsOutside: boolean;
  labels: boolean;
  color: string;
  selection: unknown[];
  fill: FillTypes;
  opacity: number;
  labelPattern: string;
  strokeCap: StrokeCap | 'STANDARD';
  strokeOffset: number;
  surrounding: SurroundingSettings;
  tooltipOffset: number;
  tooltip: TooltipSettings;
  detached?: boolean;
  labelFontSize: number;
}

export interface SelectionNode {
  id: string;
  type: NodeType;
  hasSpacing: boolean;
  data: Partial<PluginNodeData>;
  padding: Record<Alignments, string>;
  spacing?: unknown;
}
export interface NodeSelection {
  nodes: SelectionNode[];
  padding: Partial<SelectionNode>[];
  spacing: Partial<SelectionNode>[];
}

export interface ExchangeStoreValues
  extends Omit<Store, 'selection' | 'surrounding'> {
  surrounding?: SurroundingSettings;
}
