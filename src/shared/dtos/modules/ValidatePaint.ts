export type WallsDTO = {
  walls: WallParamsAttributes[];
};

export type WallParamsAttributes = {
  length: number;
  height: number;
  doors: number;
  windows: number;
};
