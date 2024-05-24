//Imports
import express from "express";
import { home, addUsuario , getUsuarios, getUsuarioRut, updateUsuario, deleteUsuario} from "../controllers/controller.js";

//Variables
const router = express.Router();

//Rutas
router.get("/", home);

router.post("/register", addUsuario);

router.get("/users", getUsuarios);

router.get("/users/user/:rut", getUsuarioRut);

router.put("/users/:id", updateUsuario);

router.delete("/users/:id", deleteUsuario);


export default router;