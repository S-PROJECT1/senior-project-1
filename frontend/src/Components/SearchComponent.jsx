import React, { useState } from 'react';
import axios from 'axios';

const SearchComponent = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/handmade/getbytitle/${searchTerm}`);
      setSearchResults(response.data);
      setError(null);
    } catch (error) {
      setError('Error fetching data');
      console.error(error);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter name to search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {searchResults.length > 0 && (
        <div>
          <h2>Search Results:</h2>
          <ul>
            {searchResults.map((result) => (
              <li key={result.id}>{result.title}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchComponent;
