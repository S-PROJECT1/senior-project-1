const itemModel = require('../database/index');

module.exports = {
  search: (req, res) => {
    const query = req.query.query;

    if (!query) {
      return res.status(400).json({ error: "Query parameter 'query' is required" });
    }

    const results = itemModel.searchItems(query);
    res.json({ results });
  }
};
