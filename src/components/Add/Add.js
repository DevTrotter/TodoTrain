import {useState} from 'react'
import StyledAdd from './StyledAdd'
import { v4 as uuidv4 } from 'uuid';

export const Add = ({arrayTask, setArrayTask}) => {
    const [dataInput , setDataInput] = useState('')

    const handleInput = (e) => {
        setDataInput(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setArrayTask([...arrayTask, {txt: dataInput, id: uuidv4()}])
        setDataInput('')
    }

    const handleKeyDown = e => {
        if(e.ctrlKey && e.keyCode === 13){
            handleSubmit(e)
        }
    }

    return (
        <StyledAdd onSubmit={e => handleSubmit(e)}>
            <span>Chose a faire</span>
            <input onInput={handleInput} onKeyDown={e => handleKeyDown(e)} type="text" id="add" name="add" value={dataInput} required/>
            <button type='submit'>Envoyez</button>
        </StyledAdd>
    )
}