// src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TransactionTable from './components/TransactionTable';
import AddTransactionForm from './components/AddTransactionForm';
import SearchBar from './components/SearchBar';

const App = () => {
  const [transactions, setTransactions] = useState([]);
  const [filteredTransactions, setFilteredTransactions] = useState([]);

  useEffect(() => {
    fetchTransactions();
  }, []);

  const fetchTransactions = async () => {
    try {
      const response = await axios.get('http://localhost:8001/transactions');
      setTransactions(response.data);
      setFilteredTransactions(response.data);
    } catch (error) {
      console.error('Error fetching transactions:', error);
    }
  };

  const handleAddTransaction = (newTransaction) => {
    setTransactions((prevTransactions) => [newTransaction, ...prevTransactions]);
    setFilteredTransactions((prevTransactions) => [newTransaction, ...prevTransactions]);
  };

  const handleSearch = (searchTerm) => {
    const filtered = transactions.filter((transaction) =>
      transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredTransactions(filtered);
  };

  const handleDelete = (id) => {
    const updatedTransactions = transactions.filter((transaction) => transaction.id !== id);
    setTransactions(updatedTransactions);
    setFilteredTransactions(updatedTransactions);
  };

  return (
    <div>
      <h1>Bank Transactions</h1>
      <SearchBar onSearch={handleSearch} />
      <AddTransactionForm onAdd={handleAddTransaction} />
      <TransactionTable transactions={filteredTransactions} onDelete={handleDelete} />
    </div>
  );
};

export default App;