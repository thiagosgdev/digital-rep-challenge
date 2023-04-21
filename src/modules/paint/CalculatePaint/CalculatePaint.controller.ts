import { Request, Response } from "express";
import { container } from "tsyringe";

import { CalculatePaintService } from "./CalculatePaint.service";
import { CalculatePaintControllerParams } from "../../../shared/dtos/modules/CalculatePaint";

export class CalculatePaintController {
  handle(request: Request, response: Response) {
    const { walls }: CalculatePaintControllerParams = request.body;

    const calculatePaintService = container.resolve(CalculatePaintService);

    try {
      const totalPaintCan = calculatePaintService.execute({ walls });
      return response.send(totalPaintCan);
    } catch (error) {
      return response.status(error.statusCode).json({ message: error.message });
    }
  }
}
