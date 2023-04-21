import "reflect-metadata";
import express from "express";
import { errors } from "celebrate";
import swaggerUi from "swagger-ui-express";

import router from "shared/routes/Paint.routes";
import swaggerFile from "../../swagger.json";

const app = express();

app.use(express.json(), router, errors());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

export default app;
