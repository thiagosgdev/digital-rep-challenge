import { TotalPaintCanParams } from "../../dtos/FuntionsTypes";
import {
  DOOR_LENGTH,
  DOOR_HEIGHT,
  PAINT_CAN_SIZE,
  PAINT_COVERAGE_PER_LITER,
  WINDOW_LENGTH,
  WINDOW_HEIGHT,
} from "../constants";
import { PaintableArea } from "./AreaManipulation";

export function TotalPaintCan({
  heightSum,
  lengthSum,
  wallsSum,
  totalDoor,
  totalWindow,
}: TotalPaintCanParams) {
  const doorsArea = DOOR_LENGTH * DOOR_HEIGHT * totalDoor;
  const windowsArea = WINDOW_LENGTH * WINDOW_HEIGHT * totalWindow;

  const paintableArea = PaintableArea({
    heightSum,
    lengthSum,
    wallsSum,
    doorsArea,
    windowsArea,
  });

  const cansNeeded = PAINT_CAN_SIZE.reduce((obj, item) => {
    return {
      ...obj,
      [item]: 0,
    };
  }, {});

  let litersNeeded = paintableArea / PAINT_COVERAGE_PER_LITER;

  while (litersNeeded > 0) {
    const canSize =
      PAINT_CAN_SIZE.find(size => size <= litersNeeded) ||
      PAINT_CAN_SIZE[PAINT_CAN_SIZE.length - 1];

    cansNeeded[String(canSize) as keyof typeof cansNeeded]++;

    litersNeeded -= canSize;
  }

  return cansNeeded;
}
