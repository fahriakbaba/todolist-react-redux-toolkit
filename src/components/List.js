import React from "react";
import ListItem from "../ListItem";

function List() {
    const [data, setData] = React.useState([
        {title: "salad", isCompleted: true, id: 1},
        {title: "meat", isCompleted: false, id: 2},
        {title: "bananas", isCompleted: true, id: 3},
    ])



    return(
        <ul className='list-group col-sm-4 mx-auto'>
            {
                data.map(item => {
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