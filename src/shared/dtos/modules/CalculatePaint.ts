export type CalculatePaintControllerParams = {
  walls: WallDTO[];
};

export type WallDTO = {
  length: number;
  height: number;
  doors: number;
  windows: number;
};
