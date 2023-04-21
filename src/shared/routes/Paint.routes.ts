import { celebrate, Segments, Joi } from "celebrate";
import express from "express";
import { CalculatePaintController } from "../../modules/paint/CalculatePaint/CalculatePaint.controller";

const router = express.Router();

const calculatePaintController = new CalculatePaintController();

router.post(
  "/paint-calculator",
  celebrate({
    [Segments.BODY]: {
      walls: Joi.array().items(
        Joi.object().keys({
          height: Joi.number().positive().required(),
          length: Joi.number().positive().required(),
          doors: Joi.number().integer().required(),
          windows: Joi.number().integer().required(),
        }),
      ),
    },
  }),
  calculatePaintController.handle,
);

export default router;
