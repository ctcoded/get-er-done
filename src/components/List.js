import React, { useState, useEffect} from 'react';
import ItemForm from './ItemForm';
import Filter from './Filter';
import ListItem from './ListItem';

function List() {
    const [selectedCategory, setSelectedCategory] = useState("All")
    const [items, setItems] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/grocery")
        .then((r) => r.json())
        .then((items) => setItems(items))
    }, [])

    function handleAdditem(newItem){
        setItems([...items, newItem]);
    }

    console.log(items)

    const itemsToDisplay = items.filter((item) => {
        if (selectedCategory === "All") return true;

        return item.category === selectedCategory;

    });

    return (
        <div>
            <h2>This is the List</h2>
            <ItemForm onAddItem={handleAdditem} />
            <Filter />
            <ul>
                {itemsToDisplay.map((item) => (
                    <ListItem key = {item.id} item = {item} />
                ))}
            </ul>
        </div>
        
    );
}

export default List;