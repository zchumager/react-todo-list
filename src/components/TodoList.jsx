import React from 'react'
import { TodoItem } from './TodoItem'

export function TodoList({tasks, toggleTask}) {
    return <ul id="todo-list">{tasks.map(task => <TodoItem key={task.id} task={task} toggleTask={toggleTask} />)}</ul>
}