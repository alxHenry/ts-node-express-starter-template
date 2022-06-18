import express from "express";
import logger from "morgan";
import cors from "cors";
import type { CorsOptions } from "cors";
import * as path from "path";
import { index } from "./routes/index";

import * as dotenv from "dotenv";
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

app.use(express.static(path.join(__dirname, "../public")));
app.use("/", index);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
