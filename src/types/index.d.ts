declare type ToolCommand =
  | "Move"
  | "SelectRectangle"
  | "SelectCircle"
  | "DrawOval"
  | "DrawRectangle"
  | "DrawPancel"
  | "GetColor"
  | "InputText"
  | "ClearCanvas"
  | "CropCanvas";
declare type DrawStatus = "moving" | "start" | "end";

declare interface MousePosition {
  x: number;
  y: number;
}
declare interface DrawPosition {
  start: MousePosition;
  end: MousePosition;
}

declare type CnvStyle = {
  left: number;
  top: number;
  width: number;
  height: number;
};
