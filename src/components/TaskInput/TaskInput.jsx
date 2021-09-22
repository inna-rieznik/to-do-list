import c from './TaskInput.module.css'


const TaskInput = () => {
    return (
        <div className={c.wrapper}>
                <input className={c.input} type="text" id="description">
                </input>
                <button className={c.button} id="add-btn">
                    Add</button>
        </div>
    );
}



export default TaskInput;
