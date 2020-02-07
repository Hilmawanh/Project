const cryptogenerate = require("../helper/crypto");
const { mysqldb } = require("../connection");
const { createJWTToken } = require("./../helper/jwt");

module.exports = {
  userRegister: (req, res) => {
    var { username, password, email } = req.body;
    var sql = `select username from users where username='${username}' and email='${email}' `;
    console.log(email);

    mysqldb.query(sql, (err, results) => {
      if (err) {
        return res.status(500).send({ status: "error", err });
      }
      if (results.length > 0) {
        console.log(results);
        return res
          .status(200)
          .send({ status: "error", message: "username has been taken" });
      } else {
        var hashpassword = cryptogenerate(password);
        var dataUser = {
          username,
          password: hashpassword,
          email,
          status: "unverified",
          roleid: 2
          // lastlogin: new Date()
        };
        sql = `insert into users set ?`;

        mysqldb.query(sql, dataUser, (err1, res1) => {
          if (err1) {
            return res.status(500).send({
              status: "error",
              message: "server error cuy",
              err: err1
            });
          }
          return res.status(200).send({ status: "success bro" });
        });
      }
    });
  },

  userLogin: (req, res) => {
    var { email, password } = req.body;
    var hashpassword = cryptogenerate(password);
    var sql = `select * from users where email='${email}' and password='${hashpassword}'`;

    mysqldb.query(sql, (err, result) => {
      if (err) {
        throw err;
      }
      if (result.length > 0) {
        return res.status(200).send({ result, status: "login berhasil" });
      } else {
        return res.status(500).send({
          status: "error",
          message: "email atau password salah",
          err
        });
      }
    });
  },

  userLoginn: (req, res) => {
    const { id } = req.params;
    const { email, password } = req.query;

    if (email || password) {
      console.log("Ini user Login", email);
      var hashpassword = cryptogenerate(password);

      var sql = `SELECT * FROM users WHERE username='${email}' AND password='${hashpassword}'`;

      mysqldb.query(sql, (err, result) => {
        if (err) res.status(500).send({ err });

        if (result[0] !== undefined) {
          if (result[0].status === "verified") {
            console.log("ver");

            let token = createJWTToken({
              id: result[0].id,
              email: result[0].email
            });
          }
        }
      });
    }
  }
};