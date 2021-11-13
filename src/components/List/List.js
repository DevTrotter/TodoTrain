import React from 'react'
import StyledList from './StyledList'
import { Task } from '../Task/Task'

export const List = ({arrayTask, setArrayTask}) => {
    return (
        <StyledList>
            <h1>Choses À Faire :</h1>
            {
                arrayTask.map(task => 
                    <Task
                        key={task.id}
                        id={task.id}
                        txt={task.txt}
                        setArrayTask={setArrayTask}
                        arrayTask={arrayTask}
                    />
                )   
            }
        </StyledList>
    )
}
