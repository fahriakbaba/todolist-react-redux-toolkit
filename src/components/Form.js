import { BsPlusSquare } from 'react-icons/bs';

function Form () {
    return(
        <form className="d-flex col-sm-4 mx-auto my-4">
            <input type="text" className="form-control me-2" placeholder='Type a todo...' />
            <BsPlusSquare className='fs-1 plus-icon' /> 
        </form>
    )
}

export default Form;