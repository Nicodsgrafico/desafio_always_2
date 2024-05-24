//Imports
import express from "express";
import router from "./routes/routes.js";

//Variables
const app = express();
const PORT = process.env.PORT || 3000;

//Middlewares
app.use(express.json());

//Rutas

app.use("/", router);

app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));