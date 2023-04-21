import {
  PaintableAreaParams,
  WallAreaParams,
  NotPaintableAreaParams,
} from "../../dtos/FuntionsTypes";
import { DOOR_HEIGHT } from "../constants";

export function WallDoorDiff(wallHeight: number): number {
  return wallHeight - DOOR_HEIGHT;
}

export function WallArea({ wallHeight, wallLength }: WallAreaParams): number {
  return wallHeight * wallLength;
}

export function NotPaintableArea({
  height,
  length,
  totalItem,
}: NotPaintableAreaParams) {
  return height * length * totalItem;
}

export function PaintableArea({
  heightSum,
  lengthSum,
  wallsSum,
  doorsArea,
  windowsArea,
}: PaintableAreaParams): number {
  const wallsArea = (heightSum * lengthSum) / wallsSum;
  const paintableArea = wallsArea - doorsArea - windowsArea;

  return paintableArea;
}
