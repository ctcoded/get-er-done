import React, { useState, useEffect} from 'react';
import ItemForm from './ItemForm';
import Filter from './Filter';
import ListItem from './ListItem';

function List() {
    const [setselectedCategory, setsetselectedCategory] = useState("All")
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
    return (
        <div>
            <h2>This is the List</h2>
            <ItemForm onAddItem={handleAdditem} />
            <Filter />
            <ListItem />
        </div>
        
    );
}

export default List;