import React from "react";
import { useSelector } from "react-redux";
import ListItem from "./ListItem";


function List() {
    const {items} = useSelector(store => store.todo);
    console.log(items);


    return(
        <ul className='list-group col-sm-4 mx-auto'>
            {
                items.map(item => {
                    return(
                        <ListItem item={item} key={item.id} />
                    )
                })
            }
        </ul>
    )
}

export default List;




    //   <ul className='list-group col-3 mx-auto'>
    //     <li className='list-group-item list-group-item-action'>hi</li>
    //     <li className='list-group-item list-group-item-action'>hi</li>
    //     <li className='list-group-item list-group-item-action'>hi</li>
    //   </ul>