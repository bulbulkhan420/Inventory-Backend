import { catagoryModel } from "../../Model/models.js";

let Delete = async (req, res) => {
    let { id } = req.body;
    let findId = await catagoryModel.findOne({ id });
    if (findId) {
        let deletestatus = await catagoryModel.findOneAndDelete({ id });
        if (deletestatus) {
            res.json({
                mess: "Successfully deleted",
            });
        } else {
            res.json({
                mess: "Something wrong",
            });
        }
    } else {
        res.json({
            mess: "Id Not found",
        });
    }
};
export { Delete };
