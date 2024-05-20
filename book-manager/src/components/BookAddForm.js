import React, { useState } from 'react';
import { getBookData } from '../utils/BookDetailsApi';

const BookAddForm = ({bookAdded}) => {
    const [isbn, setIsbn] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        if (!isbn) {
            setError("ISBN is required");
            return;
        }

        try {
            const book = await getBookData(isbn);
            bookAdded({
                title: book.title,
                subtitle: book.subtitle,
                author: book.authors[0].name,
                cover: book.cover ? book.cover.medium : "",
                isbn
            });
            setIsbn("");
        } catch (error) {
            setError('Failed to retrieve book data. Please try again.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={isbn}
                onChange={(e) => setIsbn(e.target.value)}
                placeholder="Enter ISBN"
            />
            <button type="submit">Add Book</button>
            {error && <p className="error">{error}</p>}
        </form>
    );
};

export default BookAddForm;