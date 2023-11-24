// src/components/SortBar.js
import React from 'react';

const SortBar = ({ sortBots }) => {
  return (
    <div>
      <h2>Sort Bots</h2>
      <button onClick={() => sortBots('health')}>Sort by Health</button>
      <button onClick={() => sortBots('damage')}>Sort by Damage</button>
      <button onClick={() => sortBots('armor')}>Sort by Armor</button>
    </div>
  );
};

export default SortBar;
