import React from 'react'
import StyledTask from './StyledTask'

export const Task = ({task, setArrayTask, arrayTask}) => {
    const handleDelete = () => {
        const arrayfiltered = arrayTask.filter(item => item !== `${task}`)
        setArrayTask(arrayfiltered)
    }
    return (
        <StyledTask>
            <span>{task}</span>
            <button onClick={handleDelete}>Delete</button>
        </StyledTask>
    )
}
