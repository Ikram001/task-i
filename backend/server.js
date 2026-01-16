import express from "express";
import cors from "cors";
import { getEmployees, getSingleEmployee } from "./employeesController.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/employees", getEmployees);
app.get("/api/employees/:id", getSingleEmployee);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
