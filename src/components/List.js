import React, { useState, useEffect} from 'react';
import ItemForm from './ItemForm';
import Filter from './Filter';
import ListItem from './ListItem';

function List() {
    const [selectedCategory, setSelectedCategory] = useState("All")
    const [items, setItems] = useState([])

    useEffect(() => {
        fetch("http://localhost:4000/grocery")
        .then((r) => r.json())
        .then((items) => setItems(items))
    }, [])

    function handleDeleteItem(deletedItem) {
        const updatedItems = items.filter((item) => item.id !== deletedItem.id);
        setItems(updatedItems);
    }

    function handleUpdateItem(updatedItem) {
        const updatedItems = items.map((item) => {
            if(item.id === updatedItem.id) {
                return updatedItem;
            } else {
                return item;
            }
        });
        setItems(updatedItems)
    }

    function handleAdditem(newItem){
        setItems([...items, newItem]);
    }

    console.log(items)

    function handleCategoryChange(category) {
        setSelectedCategory(category);
    }

    const itemsToDisplay = items.filter((item) => {
        if (selectedCategory === "All") return true;

        return item.category === selectedCategory;

    });

    return (
        <div>
            <h2>This is the List</h2>
            <ItemForm onAddItem={handleAdditem} />
            <Filter 
                category={selectedCategory}
                onCategoryChange={handleCategoryChange}    
            />
            <ul>
                {itemsToDisplay.map((item) => (
                    <ListItem key = {item.id} item = {item} onUpdateItem={handleUpdateItem} onDeleteItem={handleDeleteItem} />
                ))}
            </ul>
        </div>
        
    );
}

export default List;