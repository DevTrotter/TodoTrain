import './App.css';
import {useState} from 'react'
import { Add } from './components/Add/Add';
import { Header } from './components/Header/Header';
import { List } from './components/List/List'


function App() {
  const [arrayTask , setArrayTask] = useState([])

  return (
    <div className="App">
      <Header/>
      <Add arrayTask={arrayTask} setArrayTask={setArrayTask}/>
      <List arrayTask={arrayTask} setArrayTask={setArrayTask}/>
    </div>
  );
}

export default App;
