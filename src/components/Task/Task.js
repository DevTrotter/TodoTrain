import React from 'react'
import StyledTask from './StyledTask'

export const Task = (props) => {
    const handleDelete = () => {
        const arrayfiltered = props.arrayTask.filter(item => item.id !== `${props.id}`)
        props.setArrayTask(arrayfiltered)
    }
    return (
        <StyledTask>
            <span>{props.txt}</span>
            <button onClick={handleDelete} >Delete</button>
        </StyledTask>
    )
}
