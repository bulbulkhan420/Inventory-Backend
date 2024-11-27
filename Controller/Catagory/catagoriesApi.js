import { catagoryModel } from "../../Model/models.js";
import { ObjectId } from "bson";

// add catagory api
let addCatagory = async (req, res) => {
    try {
        let id = new ObjectId().toString();
        let { catagory } = req.body;
        let findcatagory = await catagoryModel.findOne({ catagory });
        if (!findcatagory) {
            const newCatagory = new catagoryModel({ id, catagory });
            await newCatagory.save();

            res.json({
                message: "OK",
            });
        } else {
            res.json({
                message: "Found",
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
        res.json({
            message: "OK",
        });
    } catch (error) {
        res.json({
            message: "something wrong",
        });
    }
};

// get all catagory api

let getAllCatagory = async (req, res) => {
    try {
        let allCatagoryList = await catagoryModel.find({});
        if (allCatagoryList) {
            res.json({
                message: "successfully get",
                data: allCatagoryList,
            });
        } else {
            res.json({
                message: "No data found",
            });
        }
    } catch (error) {
        res.json({
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

            res.json({
                message: "OK",
            });
        } else {
            res.json({
                message: "Found",
            });
        }
    } catch (error) {
        res.json({
            message: "something wrong",
        });
    }
};
export { addCatagory, deleteCatagory, getAllCatagory, updateCateogry };
