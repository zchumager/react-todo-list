import React from 'react'

export function TodoItem({task, toggleTask}) {

   const {id, description} = task

    const handleToogleTask = () => {
        toggleTask(id)
    }

    return <li><span>{description}</span> <input type="checkbox" onChange={handleToogleTask}></input></li>
}