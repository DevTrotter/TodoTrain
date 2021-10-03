import {useState} from 'react'
import { Header } from '../Header/Header'
import { Add } from '../Add/Add';
import { List } from '../List/List'
import { Link } from 'react-router-dom';

export const Home = () => {
    const [arrayTask , setArrayTask] = useState([])
    return (
        <div>
            <Header/>
            <Add arrayTask={arrayTask} setArrayTask={setArrayTask}/>
            <List arrayTask={arrayTask} setArrayTask={setArrayTask}/>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact</Link>
        </div>
    )
}
