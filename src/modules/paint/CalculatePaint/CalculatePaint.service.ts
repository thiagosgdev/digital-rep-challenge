import { container, injectable } from "tsyringe";

import { WallsDTO } from "../../../shared/dtos/modules/ValidatePaint";
import { TotalPaintCan } from "../../../shared/utils/functions/TotalPaintCan";
import { ValidatePaintRequirementsService } from "../ValidatePaintRequirements/ValidatePaintRequirements.service";

@injectable()
export class CalculatePaintService {
  execute({ walls }: WallsDTO) {
    let lengthSum = 0;
    let heightSum = 0;
    let doorSum = 0;
    let windowSum = 0;

    const validatePaintRequirement = container.resolve(
      ValidatePaintRequirementsService,
    );

    walls.forEach(wall => {
      validatePaintRequirement.execute(wall);

      lengthSum += wall.length;
      heightSum += wall.height;
      doorSum += wall.doors;
      windowSum += wall.windows;
    });

    const totalCans = TotalPaintCan({
      heightSum,
      lengthSum,
      wallsSum: walls.length,
      totalDoor: doorSum,
      totalWindow: windowSum,
    });

    return totalCans;
  }
}
