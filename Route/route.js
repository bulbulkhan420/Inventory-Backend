import express from "express";

import { catagoryController } from "../Controller/Catagory/CatagoryApiAdd.js";
import { update } from "../Controller/Catagory/CatagoryApiUpdate.js";
import { Delete } from "../Controller/Catagory/CatagoryApiDelete.js";
import { getAllCatagory } from "../Controller/Catagory/CatagoryApiGet.js";
let route = express.Router();
route.use(express.json());
route.use(express.urlencoded({ extended: true }));
route.post("/catagory/add", catagoryController);
route.put("/catagory/update", update);
route.delete("/catagory/delete", Delete);
route.get("/catagory/find", getAllCatagory);
export { route };
