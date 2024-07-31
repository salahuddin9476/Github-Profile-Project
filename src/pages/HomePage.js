import React, { useState } from 'react';
import axios from 'axios';
import Card from '../components/Card';
import './HomePage.css';

const HomePage = () => {
  const [query, setQuery] = useState('');
  const [users, setUsers] = useState([]);

  const handleSearch = async () => {
    const response = await axios.get(`https://api.github.com/search/users?q=${query}`);
    console.log("API Response --->", response)
    setUsers(response.data.items);
  };

  console.log("Search Query --->", query)
  console.log("Users --->", users)

  return (
    <div className="home-page">
      <div className="search-container">
        <h1 className='main-heading'>Github Profile Viewer</h1>
        <input
          type="text"
          placeholder="Search for GitHub profiles..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={handleSearch} className='home-button'>Search</button>
      </div>
      <div className="cards-container">
        {users.map(user => (
          <Card key={user.id} user={user} />
        ))}
      </div>
      <img className='github-image' src='https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_960_720.png'/>
    </div>
  );
};

export default HomePage;
