import React from 'react';

function Filter ({category, onCategoryChange}) {
    return (
        <div>
            <select
                name="filter"
                value={category}
                onChange={(e) => onCategoryChange(e.target.value)}
            >
                <option value="All">Filter By Category</option>
                <option value="Produce">Produce</option>
                <option value="Dairy">Dairy</option>
                <option value="Dessert">Dessert</option>
            </select>
        </div>
    )
}

export default Filter;