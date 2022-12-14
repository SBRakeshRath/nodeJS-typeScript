import express from "express";

import path from "path";
import fs from "fs";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import cors from "cors";

//import configs

import { corsOptions } from "./config.js";
import rootRouter from "../routes/router.map.js";
import finalErrorHandler from "./error.js";
//init

const app = express();

//dotenv initialization

import * as dotenv from "dotenv";
dotenv.config();

//handling cors
app.use(cors(corsOptions));

//logging
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
var accessLogStream = fs.createWriteStream(path.join(__dirname, "access.log"), {
  flags: "a",
});

if (process.env.environment == "production") {
  app.use(morgan("combined", { stream: accessLogStream }));
} else {
  app.use(morgan("dev"));
}

//handling json data

app.use(express.json());

//handling incoming data
app.use(express.urlencoded({ extended: false }));

//handling cookies
app.use(cookieParser());

//handling routes

app.use(rootRouter);

//handling error

app.use(finalErrorHandler);

export default app;
