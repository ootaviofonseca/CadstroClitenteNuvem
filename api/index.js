import express from "express";
import userRoutes from "./routes/users.js";
import cors from "cors";

const app = express();

app.use(express.json());

// Configurar CORS para permitir apenas o domínio específico
app.use(cors({
  origin: 'http://localhost:3000', // Altere para o endereço correto do seu frontend
}));

app.use("/", userRoutes);

app.listen(8800, () => {
  console.log('Backend is running on http://localhost:8800');
});
