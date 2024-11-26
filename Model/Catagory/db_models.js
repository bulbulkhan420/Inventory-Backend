import mongoose from "mongoose";
const schema = new mongoose.Schema({
    id: String,
    catagory: {
        type: String,
        required: true,
        unique: true,
    },
});
const catagoryModel = mongoose.model("Catagory", schema);
export { catagoryModel };
