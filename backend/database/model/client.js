const conn = require("../../database/index");

module.exports = {
  getAll: function (callback) {
    const sql = "SELECT * FROM `client`";
    conn.query(sql, function (error, results) {
      callback(error, results);
    });
  },

  getOne: function (callback, id) {
    const sql = "SELECT * FROM client where id =?";
    conn.query(sql, id, function (error, results) {
      callback(error, results);
    });
  },
  getOneClientByEmail: function (email, callback) {
    const sql = "SELECT * FROM client WHERE email = ? LIMIT 1";
    conn.query(sql, [email], (error, results) => {
      if (error) {
        callback(error, null);
      } else {
        if (results.length === 0) {
          callback(null, null);
        } else {
          const client = results[0];
          callback(null, client);
        }
      }
    });
  },

  add: function (callback, clientInfo) {
    const sql = "INSERT INTO  `client` SET ?";
    conn.query(sql, clientInfo, function (error, results) {
      callback(error, results);
    });
  },
  deleteOne: function (callback, idclient) {
    const sql = "DELETE FROM client WHERE id = ?";
    conn.query(sql, idclient, function (error, results) {
      callback(error, results);
    });
  },
  updateOne: function (email, firstName, phoneNumber, callback) {
    const sql = "UPDATE `client` SET firstName = ?, phoneNumber = ? WHERE email = ?";
    conn.query(sql,[firstName, phoneNumber, email], function (err, results) {
      callback(err, results);
    });
  },
  
};
