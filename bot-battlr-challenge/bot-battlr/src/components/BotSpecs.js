// src/components/BotSpecs.js
import React from 'react';

const BotSpecs = ({ bot, enlistBot }) => {
  return (
    <div>
      <h2>Bot Specs</h2>
      <img src={bot.avatar_url} alt={bot.name} />
      <h3>{bot.name}</h3>
      <p>Health: {bot.health}</p>
      <p>Damage: {bot.damage}</p>
      <p>Armor: {bot.armor}</p>
      <p>Class: {bot.bot_class}</p>
      <p>Catchphrase: {bot.catchphrase}</p>
      <button onClick={() => enlistBot(bot)}>Enlist</button>
    </div>
  );
};

export default BotSpecs;
