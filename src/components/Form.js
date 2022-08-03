import React from 'react';
import { BsPlusSquare } from 'react-icons/bs';
import { useDispatch } from "react-redux";
import { addItemTodos } from "../redux/todoSlice";

function Form () {
    const [name, setName] = React.useState("");
    const dispatch = useDispatch();

    const addItem = (e) => {
        e.preventDefault();
        if(name.trim() === "" ) {
            alert("Please, enter your duty...");
            return;
        }
        dispatch(addItemTodos({title:name}));
        setName("");
    }
    return(
        <form className="d-flex col-sm-4 mx-auto my-4" onSubmit={addItem}>
            <input
             type="text"
             className="form-control me-2"
             placeholder='Type a todo...'
             value={name}
             onChange={(e) => setName(e.target.value)}
             />
            <BsPlusSquare className='fs-1 plus-icon' onClick={addItem} /> 
        </form>
    )
}

export default Form;