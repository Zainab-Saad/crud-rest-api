const { reset } = require("nodemon");
const pg = require("pg");
const Pool = new pg.Pool({
  user: "zainab",
  host: "localhost",
  database: "crud_api",
  password: "password",
  port: 5432,
});

exports.getUsers = (req, res, next) => {
  Pool.query("SELECT * FROM users ORDER BY id ASC", (err, result) => {
    if (err) {
      throw err;
    }
    res.status(200).send(result.rows);
  });
};

exports.getUserById = (req, res, next) => {
  const id = parseInt(req.params.id);
  Pool.query("SELECT * FROM users WHERE id = $1", [id], (err, result) => {
    if (err) {
      throw err;
    }
    res.status(200).send(result.rows);
  });
};

exports.createUser = (req, res, next) => {
  const { name, email } = req.body;
  Pool.query(
    "INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *",
    [name, email],
    (err, result) => {
      if (err) {
        throw err;
      }
      res.status(200).send(`User added with ID: ${result.rows[0].id}`);
    }
  );
};

exports.updateUser = (req, res, next) => {
  const id = parseInt(req.params.id);
  const { name, email } = req.body;
  Pool.query(
    "UPDATE users SET name = $1, email = $2 WHERE id = $3",
    [name, email, id],
    (err, result) => {
      if (err) {
        throw err;
      }
      res.status(200).send(`User modified with ID: ${id}`);
    }
  );
};

exports.deleteUser = (req, res, next) => {
  const id = parseInt(req.params.id);
  Pool.query("DELETE FROM users WHERE id = $1", [id], (err, result) => {
    if (err) {
      throw err;
    }
    res.status(200).send(`User deleted with ID: ${id}`);
  });
};
