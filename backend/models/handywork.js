const connection = require("../database/index.js");

module.exports = {
  DELETE: (id, callback) => {
    const sql = "DELETE FROM handwork WHERE id_Work=?";
    connection.query(sql, [id], (err, results) => {
      callback(err, results);
    });
  },
  getAllData: (callback) => {
    const query = "SELECT * FROM handwork";
    connection.query(query, (err, results) => {
      callback(err, results);
    });
  },
  addHandWork: (newHandWork, callback) => {
    const sql = "INSERT INTO handwork SET image=?, title=?, `desc`=?, videos=?";
    const values = [newHandWork.image, newHandWork.title, newHandWork.desc, newHandWork.videos];
    connection.query(sql, values, (err, results) => {
      callback(err, results);
    });
  },
  update: (id, updatedData, callback) => {
    const sql = "UPDATE handwork SET image=?, title=?, `desc`=?, videos=? WHERE id_Work=?";
    const values = [updatedData.image, updatedData.title, updatedData.desc, updatedData.videos, id];
    connection.query(sql, values, (err, results) => {
      callback(err, results);
    });
  },
  getOne: (title, callback) => {
    const query = 'SELECT * FROM handwork WHERE title=?';
    connection.query(query, [title], (err, result) => {
      if (err) {
        callback(err, null);
      } else {
        if (result.length === 0) {
          callback(null, null);
        } else {
          callback(null, result);
        }
      }
    });
  }
};
