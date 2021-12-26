import React from 'react'

export function TodoItem({task, toggleTask}) {

   const {id, description} = task

   // Funciones
    const handleToogleTask = () => {
        toggleTask(id)
    }

    // Render
    return <li><span>{description}</span> <input type="checkbox" onChange={handleToogleTask}></input></li>
}