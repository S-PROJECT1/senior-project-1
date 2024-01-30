const db = require('../db');

// Function to search items
const searchItems = async (query) => {
  try {
    const results = await db.promise().query(
      'SELECT name FROM items WHERE name LIKE ?',
      [`%${query}%`]
    );

    return results[0].map(row => row.name);
  } catch (error) {
    console.error('Error searching items:', error);
    throw error;
  }
};

module.exports = { searchItems};
