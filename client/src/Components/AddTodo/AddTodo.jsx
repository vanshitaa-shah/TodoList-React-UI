import React from 'react'
import ButtonStyle from './AddTodo.module.css'
import { GrAdd } from "react-icons/gr";
const AddTodo = () => {
    return (
        <>
            <div className={ButtonStyle.addTodo}>
                <GrAdd />
            </div>
        </>
    )
}

export default AddTodo