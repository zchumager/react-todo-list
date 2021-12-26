import React, { Fragment, useState, useRef} from 'react'
import { TodoList } from './components/TodoList'
import { v4 as uuidv4 } from 'uuid';

export default function App() {
    
    const [tasks, setTasks] = useState([])

    const taskDescriptionRef = useRef()

    const handlerAddTask = () => {
        let id = uuidv4()
        let description = taskDescriptionRef.current.value

        if (description === '') return
        
        setTasks([...tasks, {id, description, completed: false}])

        taskDescriptionRef.current.value = null
    }

    const handlerDeleteCompletedTasks = () => {
        let incompletedTasks = tasks.filter(task => !task.completed)
        setTasks(incompletedTasks)
    }

    const toggleTask = (id) => {
        const newTasks = [...tasks]
        let task = newTasks.find(task => task.id === id)
        task.completed = !task.completed

        setTasks(newTasks)
    }

    return <Fragment>  
        <fieldset>
            <legend>New Task</legend>
            <input ref={taskDescriptionRef} type="text" placeholder="Task Description"></input>
            <button onClick={handlerAddTask}>➕</button>
            <button onClick={handlerDeleteCompletedTasks}>🗑</button>
        </fieldset>

        <div>There are {tasks.filter(task => !task.completed).length} pending tasks</div>

        <TodoList tasks={tasks} toggleTask={toggleTask}/>
    </Fragment>
}