import { addUserQuery , getUsersQuery, getUserByRut , updateUser, deleteUser} from "../models/queries.js";

export const home = (req, res) => {
    res.send("Hola mundo");
    console.log("Hola mundo");
}

export const addUsuario = async (req, res) => {
    const { name, rut, course, level } = req.body;
    await addUserQuery(name, rut, course, level);
    res.send("Usuario agregado");
}

export const getUsuarios = async (req, res) => {
    const users = await getUsersQuery();
    res.send(users);
}

export const getUsuarioRut = async (req, res) => {
    const { rut } = req.params;
    const user = await getUserByRut(rut);
    res.send(user);
}

export const updateUsuario = async (req, res) => {
    const { id } = req.params;
    const { name, rut, course, level} = req.body;
    const user = await updateUser(name, rut, course, level, id);
    res.send('User updated successfully');
}

export const deleteUsuario = async (req, res) => {
    const { id } = req.params;
    const user = await deleteUser(id);
    res.send('Usuario eliminado correctamente');
}