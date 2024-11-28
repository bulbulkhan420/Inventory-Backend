import mongoose from "mongoose";
const schema = new mongoose.Schema({
    name: String,
    phone: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        unique: true,
        require: true,
    },
    typeOfCompany: String,
});
const companyModel = mongoose.model("Companies", schema);
export { companyModel };
