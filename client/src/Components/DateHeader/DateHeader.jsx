import React from 'react'
import DateStyle from './DateHeader.module.css'

const DateHeader = () => {
    return (
        <div className={DateStyle.container}>
            <div className={DateStyle.date}>
                <span id={DateStyle.date}>12</span>
                <span id={DateStyle.monthAndYear}>
                    <span>JAN</span>
                    <span>2016</span>
                </span>
            </div>
            <div id={DateStyle.day}>
                TUESDAY
            </div>
        </div>
    )
}

export default DateHeader