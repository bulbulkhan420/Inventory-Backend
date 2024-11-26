import express, { json } from "express";
import dotenv from "dotenv";
import cors from "cors";
import { route } from "./Route/route.js";
import bodyParser from "body-parser";
dotenv.config();
// import { catagoryModel } from "./Model/models";
let app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.json());
app.use(route);
app.get("/", (req, res) => {
    res.send({
        message: "ok",
    });
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log("Successfully Run ", PORT);
});
