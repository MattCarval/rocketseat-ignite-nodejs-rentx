import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerFile from "./swagger.json";

import { router } from "./routes";

const app = express();
const PORT = 3333;
const SWAGGER_SERVER = "api-docs";
const serverInformations = [
  `\n🚀 Server is running! 🚀`,
  `🚀 Check Swagger Documentation in http://localhost:${PORT}/${SWAGGER_SERVER}/ 🚀`,
  `🚀 Check server in http://localhost:${PORT} 🚀`,
];

app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use(router);

app.listen(PORT, () => {
  serverInformations.map((information, index) => {
    if (index !== 0) {
      return console.log(`${information}`);
    }
    return console.log(`\n${information}`);
  });
});
