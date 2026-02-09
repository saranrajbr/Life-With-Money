import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cursor from "./config/database.js";
import authRoutes from "./routes/authoroutes.js"
import expenseRoutes from "./routes/expense.js"


dotenv.config();
cursor();

const app=express();
app.use(cors());
app.use(express.json());

app.use("/api/auth",authRoutes);
app.use("/api/expense",expenseRoutes);
app.listen(2000,()=>console.log("server running"));
