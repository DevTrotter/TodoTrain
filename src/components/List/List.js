import React from 'react'
import StyledList from './StyledList'
import { Task } from '../Task/Task'

export const List = ({arrayTask, setArrayTask}) => {
    return (
        <StyledList>
            <h1>Liste des choses a faire :</h1>
            {
                arrayTask.map(task => 
                    <Task 
                        task={task}
                        setArrayTask={setArrayTask}
                        arrayTask={arrayTask}
                    />
                )   
            }
        </StyledList>
    )
}
