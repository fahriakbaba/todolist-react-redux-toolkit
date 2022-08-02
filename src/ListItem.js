import { BiTrash } from 'react-icons/bi'; 

function ListItem(props) {
  return (
    <li className='list-group-item list-group-item-action d-flex justify-content-between align-items-center'>
       <input className="form-check-input me-3" type="checkbox" checked={props.item.isCompleted} />
       <span className={`me-auto ${props.item.isCompleted && "toggle"}`}>{props.item.title}</span>
       <span className='react-icon'><BiTrash /></span>
    </li>
  )
}

export default ListItem;





