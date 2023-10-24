const connection = require("../db/connection");

module.exports = {
  create: (data, callBack) => {
    connection.query(
      `insert into users(firstname, lastname, email, password) 
                values('${data.first_name}','${data.last_name}','${data.email}','${data.password}')`,
      [data.first_name, data.last_name, data.email, data.password],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  getUserByUserEmail: (email, callBack) => {
    connection.query(
      `select * from users where email = '${email}'`,
      [email],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  getUserByUserId: (id, callBack) => {
    connection.query(
      `select id,firstname,lastname,email from users where id = ${id}`,
      [id],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  getUsers: (callBack) => {
    connection.query(
      `select id,firstname,lastname,email from users`,
      [],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  updateUser: (data, callBack) => {
    connection.query(
      `update users set firstname='${data.first_name}', lastname='${data.last_name}', email='${data.email}', password='${data.password}', where id = ${data.id}`,
      [
        data.first_name,
        data.last_name,
        data.gender,
        data.email,
        data.password,
        data.number,
        data.id,
      ],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  deleteUser: (data, callBack) => {
    connection.query(
      `delete from users where id = ${data.id}`,
      [data.id],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
};
