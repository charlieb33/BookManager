import React from 'react';
import DataFilter from "./components/DataFilter";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Book Inventory Manager</h1>
        <DataFilter placeholder="Title" />
      </header>
    </div>
  );
}

export default App;
