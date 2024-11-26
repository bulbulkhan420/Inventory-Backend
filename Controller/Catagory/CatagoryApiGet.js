import { catagoryModel } from "../../Model/models.js";

let getAllCatagory = async (req, res) => {
    let allCatagoryList = await catagoryModel.find({});
    if (allCatagoryList) {
        res.json({
            mess: "successfully get",
            data: allCatagoryList,
        });
    } else {
        res.json({
            mess: "No data found",
        });
    }
};
export { getAllCatagory };
