import classNames from "classnames";
import {useDispatch} from "react-redux";
import {removeTodo} from "../../slices/todoSlice";

import './task.css'

const Task = ({priority, title, description, id}) => {
    const dispatch = useDispatch();

    const handleClick = (e) => {
        dispatch(removeTodo({id}))
    }

    let priorityClass = classNames({
        task__priority: true, low: priority === 'Low', medium: priority === 'Medium', high: priority === 'High'
    });


    return (<div className='task'>
        <div className="task__header">
            <h2 className="task__title">{title}</h2>
            <div className={priorityClass}>
                {priority}
            </div>
        </div>
        <p className="task__body">{description}</p>
        <button onClick={handleClick} className="task__btn">delete</button>
    </div>)
}

export default Task;