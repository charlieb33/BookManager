import React from 'react';
import BookRating from './BookRating';

const BookItem = (bookProps, onRate) => {
    <div className="book-item">
        <img src={bookProps.cover.medium} alt={bookProps.title} />
        <div>
            <h3>{bookProps.title}</h3>
            <h2>{bookProps.subtitle}</h2>
            <p>{bookProps.author}</p>
            <p>{bookProps.isbn}</p>
            <BookRating rating={bookProps.rating}
                onRate={(rating) => onRate(bookProps.isbn, rating)} />
        </div>
    </div>
};

export default BookItem;