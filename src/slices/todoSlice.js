import {createSlice} from "@reduxjs/toolkit";
import description from "../components/description/Description";

const initialState = {
    todos: [
        {
            title: 'Do homework',
            priority: 'Low',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500',
            id: 1
        }
    ]
}

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        setTodo(state, action) {
            state.todos.push(action.payload)
        },
        removeTodo(state, action) {
            state.todos = state.todos.filter(todo => todo.id !== action.payload.id)
        }
    }
})

const {actions, reducer} = todoSlice;

export const {setTodo, removeTodo} = actions;

export default reducer;