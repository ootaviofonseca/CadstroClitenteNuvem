import express from "express";
import userRoutes from "./routes/users.js";
import cors from "cors";

const app = express();

app.use(express.json());


app.use(cors({
  origin: 'http://3.238.158.21:3000', // Edereco da EC2
}));

app.use("/", userRoutes);

app.listen(8800, () => {
  console.log('Backend is running on http://3.238.158.21:8800');
});
