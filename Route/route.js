import express from "express";

import {
    addCatagory,
    deleteCatagory,
    updateCateogry,
    getAllCatagory,
} from "../Controller/Catagory/catagoriesApi.js";
let route = express.Router();

route.post("/catagory/add", addCatagory);
route.put("/catagory/update", updateCateogry);
route.delete("/catagory/delete/:id", deleteCatagory);
route.get("/catagory/find", getAllCatagory);
export { route };
