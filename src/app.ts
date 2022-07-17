import express from "express";
import logger from "morgan";
import cors from "cors";
import type { CorsOptions } from "cors";
import { index } from "./routes/index.js";

import * as dotenv from "dotenv";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
dotenv.config();

const port = process.env.PORT || 3000;

const originWhitelist = [`http://localhost:${port}`];
const corsConfig: CorsOptions = {
  origin: (origin, callback) => {
    if (origin == null || originWhitelist.indexOf(origin) !== -1) {
      callback(null, true);
      return;
    }

    callback(new Error("Not allowed by CORS"));
  },
  optionsSuccessStatus: 200,
};

export const app = express();
app.set("port", port);
app.use(logger("dev"));
app.use(express.json());
app.use(cors(corsConfig));

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.static(join(__dirname, "../public")));
app.use("/", index);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
