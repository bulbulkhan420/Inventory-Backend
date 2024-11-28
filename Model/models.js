import mongoose from "mongoose";
import dotenv from "dotenv";
import { catagoryModel } from "./catagory/catagoryModel.js";
import { companyModel } from "./catagory/companyModel.js";
dotenv.config();

mongoose.connect(process.env.Db_url);
export { catagoryModel, companyModel };
