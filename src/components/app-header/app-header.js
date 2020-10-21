import React from 'react';
import './app-header.css';

const AppHeader = ({liked, allPosts}) => {

  function declOfNum(n, titles) {
		return n + ' ' + titles[n % 10 === 1 && n % 100 !== 11 ?
			0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2];
	}
  const arr = ['запись', 'записи', 'записей'];
  let countTitle = declOfNum(allPosts, arr);
  return (
    <div className="app-header d-flex">
        <h1>Username</h1>
        <h2>{countTitle}, из них понравилось {liked}</h2>
    </div>
  )
}

export default AppHeader; 