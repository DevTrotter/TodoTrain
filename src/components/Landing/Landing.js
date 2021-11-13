import {useState} from 'react'
import { Add } from '../Add/Add';
import { List } from '../List/List'
import StyledLanding from './StyledLanding';

export const Landing = () => {
    const [arrayTask , setArrayTask] = useState([])
    return (
        <StyledLanding>
            <List arrayTask={arrayTask} setArrayTask={setArrayTask}/>
            <Add arrayTask={arrayTask} setArrayTask={setArrayTask}/>
        </StyledLanding>
    )
}
