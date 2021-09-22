import c from './ToDoItem.module.css'

const ToDoItem = () => {
    return (
        <div className={c.item}>
            <div className ={c.description}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nulla turpis magna, cursus sit amet, suscipit a, interdum id, felis. </div>
            <input className={c.completeBtn} type="checkbox">
            </input>
            <button className={c.deleteBtn}>Delete</button>
        </div>
    );
}

export default ToDoItem;