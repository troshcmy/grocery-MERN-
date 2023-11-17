// HomePage.js
import React, { useState, useEffect } from 'react';

const HomePage = ({ history }) => {
  const [databases, setDatabases] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3003/databases')
      .then((response) => response.json())
      .then((data) => setDatabases(data))
      .catch((error) => console.error('Error fetching databases', error));
  }, []);

  const handleDatabaseClick = (databaseId) => {
    history.push(`/database/${databaseId}`);
  };

  return (
    <div className="container">
      <h1>Welcome to Admin Panel!</h1>
      <h2>Database List</h2>
      <ul>
        {databases.map((database) => (
          <li key={database._id} onClick={() => handleDatabaseClick(database._id)}>
            {database.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
