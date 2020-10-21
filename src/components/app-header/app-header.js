import React from 'react';
import './app-header.css';

const AppHeader = ({liked, allPosts}) => {
  return (
    <div className="app-header d-flex">
        <h1>Username</h1>
        <h2>{allPosts} записи(ей), из них понравилось {liked}</h2>
    </div>
  )
}

export default AppHeader; 