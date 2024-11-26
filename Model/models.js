import mongoose from "mongoose";
import dotenv from "dotenv";
import { catagoryModel } from "./Catagory/db_models.js";
dotenv.config();

mongoose.connect(process.env.Db_url);

export { catagoryModel };
