// imports
import React from 'react'
import DateStyle from './DateHeader.module.css'

const DateHeader = () => {
    // variable declaration
    const date = new Date();
    return (
        <div className={DateStyle.container}>
            <div className={DateStyle.date}>
                <span id={DateStyle.date}>{date.getDate()}</span>
                <span id={DateStyle.monthAndYear}>
                    <span>{date.toLocaleString('en-US', { month: 'short' })}</span>
                    <span>{date.getFullYear()}</span>
                </span>
            </div>
            <div id={DateStyle.day}>
                {date.toLocaleString('en-US', { weekday: 'long' })}
            </div>
        </div>
    )
}

export default DateHeader