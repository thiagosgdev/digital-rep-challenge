export type WallAreaParams = {
  wallHeight: number;
  wallLength: number;
};

export type PaintableAreaParams = {
  heightSum: number;
  lengthSum: number;
  wallsSum: number;
  doorsArea: number;
  windowsArea: number;
};

export type TotalPaintCanParams = {
  heightSum: number;
  lengthSum: number;
  wallsSum: number;
  totalDoor: number;
  totalWindow: number;
};

export type NotPaintableAreaParams = {
  height: number;
  length: number;
  totalItem: number;
};
