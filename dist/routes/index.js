import { Router } from "express";
import * as controller from "../controllers/index.js";
export const index = Router();
index.get("/", controller.index);
//# sourceMappingURL=index.js.map