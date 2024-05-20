import React from 'react';
import ReactStars from 'react-stars';

const BookRating = ({rating, onRate}) => {
    <ReactStars
        count={5}
        value={rating}
        onChange={onRate}
        size={20}
    />
};

export default BookRating;