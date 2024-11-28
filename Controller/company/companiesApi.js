import { companyModel } from "../../Model/models.js";
import { responce } from "../responce/response.js";
// Insert
let addCompanyInformation = async (req, res) => {
    try {
        let { name, phone, email, typeOfCompany } = req.body;
        let newCompanyInformation = new companyModel({
            name,
            phone,
            email,
            typeOfCompany,
        });
        await newCompanyInformation.save();
        responce(res, { message: "OK" });
        // res.json({
        //     message: "OK",
        // });
    } catch (error) {
        responce(res, { message: error });
    }
};

// Update

let updateCompanyInformation = async (req, res) => {
    try {
        let { name, email, phone, typeOfCompany } = req.body;
        await companyModel.findOneAndUpdate(
            { email },
            { $set: { name, phone, typeOfCompany } }
        );
        responce(res, { message: "OK" });
    } catch (error) {
        responce(res, { message: error });
    }
};

// delete
let deleteCompanyInformation = async (req, res) => {
    try {
        let email = req.params.email;
        await companyModel.findOneAndDelete({ email });
        responce(res, { message: "OK" });
    } catch (error) {
        responce(res, { message: error });
    }
};

//get

let getAllCompanyInformation = async (req, res) => {
    try {
        let information = await companyModel.find({});
        responce(res, { message: "OK", data: information });
    } catch (error) {
        responce(res, { message: error });
    }
};
export {
    addCompanyInformation,
    updateCompanyInformation,
    deleteCompanyInformation,
    getAllCompanyInformation,
};
