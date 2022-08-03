import { BiTrash } from 'react-icons/bi'; 
import { removeItemTodos, toggleItemTodos } from "../redux/todoSlice";
import { useDispatch } from "react-redux";

function ListItem(props) {
  const dispatch = useDispatch();

  const deleteItem = () => {
    dispatch(removeItemTodos({id: props.item.id}));
  }

  const toggleItem = () => {
    dispatch(toggleItemTodos({id: props.item.id, isCompleted: !props.item.isCompleted}));
  }

  const liStyles = {
    backgroundColor: props.item.isCompleted && "rgba(128, 128, 128, .1)",

  }

  const checkboxStyles = {
    cursor: "pointer", 
    
  }

  return (
    <li style={liStyles} className='list-group-item list-group-item-action d-flex justify-content-between align-items-center'>
       <input
        className="form-check-input me-3"
        style={checkboxStyles}
        type="checkbox"
        checked={props.item.isCompleted}
        onChange={toggleItem}
       />
       <span className={`me-auto ${props.item.isCompleted && "toggle"}`}>{props.item.title}</span>
       <span className='react-icon'  onClick={deleteItem} ><BiTrash /></span>
    </li>
  )
}

export default ListItem;




