import React from 'react';

function ListItem({item}) {

    return (
        <li>
            <span>{item.name}</span>
            <span>{item.category}</span>
        </li>
    )
}

export default ListItem;