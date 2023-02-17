import React from 'react';

function ListItem({item, onUpdateItem, onDeleteItem}) {

    function handleAddToCartClick() {
        fetch(`http://localhost:3000/grocery/${item.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                isInCart: !item.isInCart,   
            }),
        })
        .then((r) => r.json())
        .then((updatedItem) => onUpdateItem(updatedItem))
    }

    function handleDeleteClick() {
        fetch(`http://localhost:3000/grocery/${item.id}`, {
            method: "DELETE",
        })
        .then((r) => r.json())
        .then(() => onDeleteItem(item));
    }

    return (
        <li>
            <span>{item.name}</span>
            <span>{item.category}</span>
            <button className={item.isInCart ? "remove" : "add"} onClick={handleAddToCartClick}>
                {item.isInCart ? "Remove From" : "Add to"} Cart
            </button>
            <button className="remove" onClick={handleDeleteClick}>Delete</button>
        </li>
    )
}

export default ListItem;