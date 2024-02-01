const model = require("../models/handmade");

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
  getAllHandMades: (req, res) => {
    model.getAllData((err, handmades) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.json(handmades);
      }
    });
  },
  addOneHandMade: (req, res) => {
    const newHandmade = req.body;
    model.addOne(newHandmade, (err, results) => {
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
