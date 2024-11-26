import { catagoryModel } from "../../Model/models.js";
import { ObjectId } from "bson";
import express from "express";

let catagoryController = async (req, res) => {
    try {
        let id = new ObjectId().toString();
        let { catagory } = req.body;

        const newit = new catagoryModel({ id, catagory });
        await newit.save();
        console.log("donbe");
        res.json({
            mess: "Success",
        });
    } catch (error) {
        console.log("🚀 ~ catagoryController ~ error:", error);
        res.send(error);
    }
};
export { catagoryController };
