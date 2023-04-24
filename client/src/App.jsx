import React from 'react'
import DateHeader from './Components/DateHeader'
import TodoList from './Components/TodoList'
import './App.css'
import AddTodo from './Components/AddTodo'

const App = () => {
  return (
    <div className="app-body">
      <div className="container">
        <DateHeader />
        <TodoList />
        <AddTodo />
      </div>
    </div>
  )
}

export default App