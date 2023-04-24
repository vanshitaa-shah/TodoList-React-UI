import React from 'react'
import CheckedTask from './CheckedTask'
import ListStyle from './TodoList.module.css'
import UncheckedTask from './UncheckedTask'
const TodoList = () => {
    return (
        <div className={ListStyle.listContainer}>
            <CheckedTask />
            <CheckedTask />
            <CheckedTask />
            <UncheckedTask />
            <UncheckedTask />
            <UncheckedTask />
            <UncheckedTask />
            <UncheckedTask />
            <UncheckedTask />
            <UncheckedTask />
            <UncheckedTask />
        </div>
    )
}

export default TodoList