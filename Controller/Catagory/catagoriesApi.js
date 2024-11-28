import { catagoryModel } from "../../Model/models.js";
import { ObjectId } from "bson";
import { responce } from "../responce/response.js";
// add catagory api
let addCatagory = async (req, res) => {
    try {
        let id = new ObjectId().toString();
        let { catagory } = req.body;
        let findcatagory = await catagoryModel.findOne({ catagory });
        if (!findcatagory) {
            const newCatagory = new catagoryModel({ id, catagory });
            await newCatagory.save();
            responce(res, {
                message: "OK",
            });
        } else {
            responce(res, {
                message: "FOUND",
            });
        }
    } catch (error) {
        console.log("🚀 ~ catagoryController ~ error:", error);
        res.send(error);
    }
};

// delete catagory api

let deleteCatagory = async (req, res) => {
    try {
        let id = req.params.id;
        await catagoryModel.findOneAndDelete({ id });
        responce(res, {
            message: "OK",
        });
    } catch (error) {
        responce(res, {
            message: "something wrong",
        });
    }
};

// get all catagory api

let getAllCatagory = async (req, res) => {
    try {
        let allCatagoryList = await catagoryModel.find({});
        if (allCatagoryList) {
            responce(res, {
                message: "successfully get",
                data: allCatagoryList,
            });
        } else {
            responce(res, {
                message: "No data found",
            });
        }
    } catch (error) {
        responce(res, {
            message: "something error",
        });
    }
};

//update catagry api

let updateCateogry = async (req, res) => {
    try {
        let { id, catagory } = req.body;
        await catagoryModel.findOne({ id });

        let findcatagory = await catagoryModel.findOne({ catagory });
        if (!findcatagory) {
            await catagoryModel.findOneAndUpdate(
                { id },
                { $set: { catagory } }
            );
            responce(res, {
                message: "OK",
            });
        } else {
            responce(res, {
                message: "Found",
            });
        }
    } catch (error) {
        responce(res, {
            message: "something wrong",
        });
    }
};
export { addCatagory, deleteCatagory, getAllCatagory, updateCateogry };
