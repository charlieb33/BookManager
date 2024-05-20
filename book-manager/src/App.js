import React, { useState, useEffect } from 'react';
import BookAddForm from './components/BookAddForm';
import BookList from './components/BookList';
import './App.css';

const App = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const myBooks = JSON.parse(localStorage.getItem('books')) || [];
        setBooks(myBooks);
    }, []);

    useEffect(() => {
        localStorage.setItem('books', JSON.stringify(books));
    }, [books]);

    const addBook = book => {
        setBooks([...books, { ...book, rating: 0 }]);
    };

    const rateBook = (isbn, rating) => {
        setBooks(books.map(book =>
            (book.isbn === isbn) ? { ...book, rating } : book));
    };

    return (
        <div className="App">
            <header className="App-header">
                <h1>Book Inventory Manager</h1>
            </header>
            <BookAddForm bookAdded={addBook} />
            <BookList books={books} onRate={rateBook} />
        </div>
    );
}

export default App;
