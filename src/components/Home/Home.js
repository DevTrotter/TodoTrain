import {useState} from 'react'
import { Sidebar } from '../Sidebar/Sidebar'
import { Add } from '../Add/Add';
import { List } from '../List/List'
import { Link } from 'react-router-dom';

export const Home = () => {
    const [arrayTask , setArrayTask] = useState([])
    return (
        <div>
            <Sidebar/>
            <Add arrayTask={arrayTask} setArrayTask={setArrayTask}/>
            <List arrayTask={arrayTask} setArrayTask={setArrayTask}/>
        </div>
    )
}
