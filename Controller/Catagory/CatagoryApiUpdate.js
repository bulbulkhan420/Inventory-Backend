import { catagoryModel } from "../../Model/models.js";

let update = async (req, res) => {
    let { id, catagory } = req.body;
    let findId = await catagoryModel.findOne({ id });
    if (findId) {
        let updatestatus = await catagoryModel.findOneAndUpdate(
            { id },
            { $set: { catagory } }
        );
        if (updatestatus) {
            res.json({
                mess: "OK",
            });
        } else {
            res.json({
                mess: "Error",
            });
        }
    } else {
        res.json({
            mess: "Not Found",
        });
    }
};
export { update };
