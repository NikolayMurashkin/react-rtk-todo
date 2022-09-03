import InputTitle from "../inputTitle/InputTitle";
import Description from "../description/Description";
import {useState} from "react";
import {useDispatch} from "react-redux";
import './form.css';
import {nanoid} from "@reduxjs/toolkit";
import {setTodo} from "../../slices/todoSlice";
import PriorityButton from "../priorityButton/PriorityButton";

const Form = () => {
    const [title, setTitle] = useState('');
    const [priority, setPriority] = useState('Low');
    const [description, setDescription] = useState('');

    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault();
        setTitle('')
        setPriority('')
        setDescription('')
        dispatch(setTodo({title, priority, description, id: nanoid()}))
    }
    return (
        <form className='form' onSubmit={e => handleSubmit(e)}>
            <div className="form__header">
                <InputTitle title={title} setTitle={setTitle}/>
                <button className='form__button' type="submit"></button>
            </div>
            <div className='priority'>
                <div className="priority__label">Priority:</div>
                <PriorityButton
                handleClick={(e) => setPriority(e.currentTarget.value)}
                priority={priority}
                color={'#339900'}
                text={'Low'}
            />
            <PriorityButton
                handleClick={(e) => setPriority(e.currentTarget.value)}
                priority={priority}
                color={'#FFCD06'}
                text={'Medium'}
            />
            <PriorityButton
                handleClick={(e) => setPriority(e.currentTarget.value)}
                priority={priority}
                color={'#CC3300'}
                text={'High'}
            />
            </div>
            <Description description={description} setDescription={setDescription}/>
        </form>
    )
}

export default Form;
