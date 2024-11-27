import mongoose from "mongoose";
import dotenv from "dotenv";
import { catagoryModel } from "./Catagory/catagoryModel.js";
dotenv.config();

mongoose.connect(process.env.Db_url);

export { catagoryModel };
