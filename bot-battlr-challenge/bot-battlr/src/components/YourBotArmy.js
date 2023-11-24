// src/components/YourBotArmy.js
import React from 'react';

const YourBotArmy = ({ army, releaseFromArmy, dischargeFromService }) => {
  return (
    <div>
      <h2>Your Bot Army</h2>
      {army.map(bot => (
        <div key={bot.id}>
          <img src={bot.avatar_url} alt={bot.name} />
          <h3>{bot.name}</h3>
          <button onClick={() => releaseFromArmy(bot)}>Release</button>
          <button onClick={() => dischargeFromService(bot.id)}>Discharge</button>
        </div>
      ))}
    </div>
  );
};

export default YourBotArmy;
