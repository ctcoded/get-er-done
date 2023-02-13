import React, { useState} from 'react';
import ItemForm from './ItemForm';
import Filter from './Filter';
import ListItem from './ListItem';

function List() {
    const [setselectedCategory, setsetselectedCategory] = useState("All")
    return (
        <div>
            <h2>This is the List</h2>
            <ListItem />
        </div>
        
    );
}

export default List;