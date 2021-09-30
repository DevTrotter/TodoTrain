import {useState} from 'react'
import StyledAdd from './StyledAdd'

export const Add = ({arrayTask, setArrayTask}) => {
    const [dataInput , setDataInput] = useState('')

    const handleInput = (e) => {
        setDataInput(e.target.value)
    }

    const handleClick = () => {
        setArrayTask([...arrayTask, dataInput])
        setDataInput('')
    }

    return (
        <StyledAdd>
            <span>Chose a faire</span>
            <input onInput={handleInput} type="text" id="add" name="add" value={dataInput} required/>
            <button onClick={handleClick}>Envoyez</button>
        </StyledAdd>
    )
}
