import { BiTrash } from 'react-icons/bi'; 
import { removeItemTodos } from "../redux/todoSlice";
import { useDispatch } from "react-redux";

function ListItem(props) {
  const dispatch = useDispatch();

  const deleteItem = () => {
    dispatch(removeItemTodos({id: props.item.id}));
  }
  return (
    <li className='list-group-item list-group-item-action d-flex justify-content-between align-items-center'>
       <input
        className="form-check-input me-3"
         type="checkbox"
       />
       <span className={`me-auto ${props.item.isCompleted && "toggle"}`}>{props.item.title}</span>
       <span className='react-icon'  onClick={deleteItem} ><BiTrash /></span>
    </li>
  )
}

export default ListItem;




