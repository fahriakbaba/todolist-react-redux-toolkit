import { useSelector} from "react-redux";

function Footer() {
    const {items} = useSelector(store => store.todo);
    const completedItemsLength = items.filter(item => item.isCompleted === true).length;
    
    if (completedItemsLength>0) {
    return(
        <article style={{backgroundColor:"#FFF3CD"}} className="d-flex justify-content-between col-sm-4 mx-auto mt-3 py-3 px-4 rounded">
            <span className="h6 my-auto">Completed Items:</span>
            <span className="h6 text-danger my-auto">{completedItemsLength}</span>
        </article>
    )
    }
    return(
        <div></div>
    )
}

export default Footer;