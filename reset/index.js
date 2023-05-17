import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import router from "./routes/router.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use(router);

const PORT = process.env.PORT;

// database connection

    const params={
        useNewUrlParser:true,
        useUnifiedTopology:true,
    };
    try {
        mongoose.connect(process.env.DATABASE,params);
        console.log("Database is connected");
    } catch (error) {
        console.log(error);
    }




app.get("/",(req,res)=>{
  res.send("welcome and reset your password")
})




app.listen(PORT, () => {
  console.log(`${PORT} is connected succesfully`);
});
