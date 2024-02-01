const model = require("../models/handywork");

module.exports = {
  DELETE: (req, res) => {
    model.DELETE(req.params.id, (err, results) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.json(results);
      }
    });
  },
  getAllHandWorks: (req, res) => {
    model.getAllData((err, handworks) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.json(handworks);
      }
    });
  },
  addNewHandWork: (req, res) => {
    const newHandWork = req.body;
    model.addHandWork(newHandWork, (err, results) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.json(results);
      }
    });
  },
  getByTitle: (req, res) => {
    const title = req.params.title;
    model.getOne(title, (err, result) => {
      if (err) {
        res.status(500).send(err);
      } else {
        if (!result) {
          res.status(404).send("Item not found");
        } else {
          res.status(200).json(result);
        }
      }
    });
  },
  update: (req, res) => {
    const id = req.params.id;
    const updatedData = req.body;

    model.update(id, updatedData, (err, results) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.json(results);
      }
    });
  }
};
