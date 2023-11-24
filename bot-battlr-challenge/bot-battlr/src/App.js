// src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BotCollection from './components/BotCollection';
import YourBotArmy from './components/YourBotArmy';
import BotSpecs from './components/BotSpecs';
import SortBar from './components/SortBar';
import './App.css'; // Import the CSS file

const App = () => {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);
  const [selectedBot, setSelectedBot] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8001/bots')
      .then(response => setBots(response.data))
      .catch(error => console.error('Error fetching bots:', error));
  }, []);

  const addToArmy = (bot) => {
    if (!army.find(b => b.id === bot.id)) {
      setArmy([...army, bot]);
    }
  };

  const releaseFromArmy = (bot) => {
    setArmy(army.filter(b => b.id !== bot.id));
  };

  const dischargeFromService = (botId) => {
    axios.delete(`http://localhost:8001/bots/${botId}`)
      .then(response => {
        setArmy(army.filter(b => b.id !== botId));
      })
      .catch(error => console.error('Error discharging bot:', error));
  };

  const enlistBot = (bot) => {
    addToArmy(bot);
    setSelectedBot(null);
  };

  const sortBots = (criteria) => {
    // Implement the logic to sort bots based on criteria (health, damage, armor)
  };

  return (
    <div>
      {selectedBot ? (
        <BotSpecs bot={selectedBot} enlistBot={enlistBot} />
      ) : (
        <>
          <BotCollection addToArmy={addToArmy} bots={bots} />
          <YourBotArmy army={army} releaseFromArmy={releaseFromArmy} dischargeFromService={dischargeFromService} />
          <SortBar sortBots={sortBots} />
        </>
      )}
    </div>
  );
};

export default App;
