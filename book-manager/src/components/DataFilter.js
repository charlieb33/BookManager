import React from 'react';

function DataFilter(props) {
    return (
        <div className="filter-container">
            <label htmlFor="search">
                Search:
            </label>
            <input
                type="text"
                value={props.value}
                onChange={props.onChange}
                name="search"
                placeholder={props.placeholder}
            />
        </div>
    );
}

export default DataFilter;