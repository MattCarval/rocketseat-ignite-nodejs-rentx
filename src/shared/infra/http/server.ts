import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";
import swaggerUi from "swagger-ui-express";
import createConnection from "@shared/infra/typeorm";
import "@shared/container";
import { router } from "@shared/infra/http/routes";
import swaggerFile from "../../../swagger.json";
import { AppError } from "@shared/errors/AppError";

createConnection();
const app = express();
const PORT = 3333;
const SWAGGER_SERVER = "api-docs";
const serverInformations = [
  `\nš Server is running! š`,
  `š Check Swagger Documentation in http://localhost:${PORT}/${SWAGGER_SERVER}/ š`,
  `š Check server in http://localhost:${PORT} š`,
];

app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use(router);

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        message: err.message,
      });
    }
    return response.status(500).json({
      status: "error",
      message: `Internal server error = ${err.message}`,
    });
  }
);

app.listen(PORT, () => {
  serverInformations.map((information, index) => {
    if (index !== 0) {
      return console.log(`${information}`);
    }
    return console.log(`\n${information}`);
  });
});
