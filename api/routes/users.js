import express from "express";
import { addUser, deleteUser, getUsers, updateUser, searchUsers } from "../controllers/user.js";

const router = express.Router()

router.get("/users", getUsers)

router.post("/", addUser)

router.put("/:id", updateUser)

router.delete('/:id', deleteUser)

router.get('/search', searchUsers);  // Alterar a rota de busca conforme necessário


export default router