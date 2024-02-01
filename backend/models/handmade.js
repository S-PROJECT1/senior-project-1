const connection = require("../database/index.js");

module.exports = {
  DELETE: (id, callback) => {
    const sql = "DELETE FROM handmade WHERE id=?";
    connection.query(sql, [id], (err, results) => {
      callback(err, results);
    });
  },
  getAllData: (callback) => {
    const query = "SELECT * FROM handmade";
    connection.query(query, (err, results) => {
      callback(err, results);
    });
  },
  addOne: (handmade, callback) => {
    const sql = 'INSERT INTO handmade SET img=?, title=?, description=?, video=?';
    const values = [handmade.img, handmade.title, handmade.description, handmade.video];
    connection.query(sql, values, (err, results) => {
      callback(err, results);
    });
  },
  update: (id, updatedData, callback) => {
    const sql = "UPDATE handmade SET img=?, title=?, description=?, video=? WHERE id=?";
    const values = [updatedData.img, updatedData.title, updatedData.description, updatedData.video, id];
    connection.query(sql, values, (err, results) => {
      callback(err, results);
    });
  },
  getOne: (title, callback) => {
    const query = 'SELECT * FROM handmade WHERE title=?';
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
