import pool from "./db.js";

export const getEmployees = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM employees ORDER BY id ASC");
    res.json(result.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

export const getSingleEmployee = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query("SELECT * FROM employees WHERE id = $1", [
      id,
    ]);
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
};
