import AppError from "../../../shared/errors/AppError";
import { WallParamsAttributes } from "../../../shared/dtos/modules/ValidatePaint";
import {
  DOOR_HEIGHT,
  DOOR_LENGTH,
  WINDOW_HEIGHT,
  WINDOW_LENGTH,
} from "../../../shared/utils/constants";
import {
  NotPaintableArea,
  WallArea,
  WallDoorDiff,
} from "../../../shared/utils/functions/AreaManipulation";

export class ValidatePaintRequirementsService {
  execute(wall: WallParamsAttributes): void {
    const doorDiff = WallDoorDiff(wall.height);

    if (doorDiff < 0.3) {
      throw new AppError(
        "Invalid wall height. It have to be atleast 30cm taller than the door",
      );
    }

    const wallArea = WallArea({
      wallHeight: wall.height,
      wallLength: wall.length,
    });
    if (wallArea < 1 || wallArea > 50) {
      throw new AppError(
        "Invalid wall area. It should be less than 50m² and more than 1m²",
      );
    }

    const doorArea = NotPaintableArea({
      height: DOOR_HEIGHT,
      length: DOOR_LENGTH,
      totalItem: wall.doors,
    });

    const windowArea = NotPaintableArea({
      height: WINDOW_HEIGHT,
      length: WINDOW_LENGTH,
      totalItem: wall.windows,
    });

    const notPaintableArea = windowArea + doorArea;

    if (notPaintableArea > wallArea / 2) {
      throw new AppError(
        "Invalid Wall Area. The not paintable area (doors and windows) is bigger than the paintable area",
      );
    }
  }
}
