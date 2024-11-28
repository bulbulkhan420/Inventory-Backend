import express from "express";

import {
    addCatagory,
    deleteCatagory,
    updateCateogry,
    getAllCatagory,
} from "../Controller/catagory/catagoriesApi.js";
import {
    addCompanyInformation,
    updateCompanyInformation,
    deleteCompanyInformation,
    getAllCompanyInformation,
} from "../Controller/company/companiesApi.js";
let route = express.Router();

route.post("/catagory/add", addCatagory);
route.put("/catagory/update", updateCateogry);
route.delete("/catagory/delete/:id", deleteCatagory);
route.get("/catagory/find", getAllCatagory);
route.post("/company/add", addCompanyInformation);
route.put("/company/update", updateCompanyInformation);
route.delete("/company/delete/:email", deleteCompanyInformation);
route.get("/company/get", getAllCompanyInformation);
export { route };
