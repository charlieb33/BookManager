import React from 'react';
import BookItem from './BookItem';

const BookList = (books, onRate) => {
    <div className="book-list">
        {books.books.map(bookItem => (
            <BookItem key={bookItem.isbn} book={bookItem} onRate={onRate} />
        ))}
    </div>
};

export default BookList;