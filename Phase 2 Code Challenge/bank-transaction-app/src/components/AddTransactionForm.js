// src/components/AddTransactionForm.js
import React, { useState } from 'react';

const AddTransactionForm = ({ onAdd }) => {
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      id: Date.now(), // For simplicity, use the timestamp as the ID
      description,
      category,
      amount,
      date: new Date().toLocaleDateString(),
    };
    onAdd(newTransaction);
    setDescription('');
    setCategory('');
    setAmount('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Description:
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
      </label>
      <label>
        Category:
        <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} />
      </label>
      <label>
        Amount:
        <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
      </label>
      <button type="submit">Add Transaction</button>
    </form>
  );
};

export default AddTransactionForm;