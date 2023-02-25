import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use("/user",userRoutes);

const PORT = process.env.PORT || 6969;

app.listen(PORT,() => {
    connectdb();
    console.log(`Server running on PORT ${PORT} 🔥`);
})