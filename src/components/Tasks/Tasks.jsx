import ToDoItem from "./ToDoItem/ToDoItem";
import c from './Tasks.module.css'
const Tasks = () => {
    return (
        <div className={c.wrapper}>
            <h2>Tasks for this day</h2>
            <ToDoItem/>
            <ToDoItem/>
            <ToDoItem/>
        </div>
    );
}

export default Tasks;