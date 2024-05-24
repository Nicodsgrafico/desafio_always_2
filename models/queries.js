import { pool } from "../config/db.js";

//Funcion que permita agregar usuarios

const addUserQuery = async (name, rut, course, level) => {
    try {
      const sql = {
        text: "INSERT INTO users (name, rut, course, level) VALUES ($1, $2, $3, $4) returning *",
        values: [name, rut, course, level],
      };
      const response = await pool.query(sql);
      if (response.rowCount > 0) return response.rows[0];
    } catch (error) {
      console.log(`Error Code: ${error.code}, Error Message: ${error.message}`);
    }
  };

  const getUsersQuery = async () => {
    try {
      const sql = {
        text: "SELECT * FROM users",
        rowMode: "array",
      };
  
      const response = await pool.query(sql);
      if (response.rowCount > 0) return response.rows;
    } catch (error) {
      console.log(`Error Code: ${error.code}, Error Message: ${error.message}`);
    }
  };

  const getUserByRut = async (rut) => {
    try {
        const sql = {
            text: "SELECT * FROM users WHERE rut = $1",
            values: [rut],
        }
        const response = await pool.query(sql);
        if (response.rowCount > 0) return response.rows[0];
    } catch (error) {
        console.log(`Error Code: ${error.code}, Error Message: ${error.message}`);
    }
  }
  const updateUser = async (name, rut, course, level, id) => {
    try {
      const sql = {
        text: "UPDATE users SET name = $1, rut = $2, course = $3, level = $4 WHERE id = $5 returning *",
        values: [name, rut, course, level, id],
      };
      const response = await pool.query(sql);
      if (response.rowCount > 0) return response.rows[0];
    } catch (error) {
      console.log(`Error Code: ${error.code}, Error Message: ${error.message}`);
    }
  }


  const deleteUser = async (id) => {
      try {
        const sql = {
          text: "DELETE FROM users WHERE id = $1 RETURNING *",
          values: [id],
        }
        const response = await pool.query(sql);
        if (response.rowCount > 0) return response.rows;
    
      } catch (error) {
          console.log(`Error Code: ${error.code}, Error Message: ${error.message}`);
      }
  }

  //Exportar funciones
export {
    addUserQuery,
    getUsersQuery,
    getUserByRut,
    updateUser,
    deleteUser}