import express from "express";
import logger from "morgan";
import cors, { CorsOptions } from "cors";
import * as path from "path";
import { index } from "./routes/index";

import dotenv from "dotenv";
dotenv.config();

const port = process.env.PORT || 3000;

const originWhitelist = [`http://localhost:${port}`];
const corsConfig: CorsOptions = {
  origin: (origin, callback) => {
    if (origin == null) {
      callback(new Error("No origin supplied"));
      return;
    }

    if (originWhitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
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