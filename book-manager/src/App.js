import React, { useState, useEffect } from 'react';
// import DataFilter from "./components/DataFilter";
import BookAddForm from './components/BookAddForm';
import './App.css';

const App = () => {
    const [books, setBooks] = useState([]);

    const addBook = book => {
        setBooks([...books, { ...book, rating: 0 }]);
    };

    return (
        <div className="App">
            <header className="App-header">
                <h1>Book Inventory Manager</h1>
            </header>
            <BookAddForm bookAdded={addBook} />
        </div>
    );
}

export default App;
