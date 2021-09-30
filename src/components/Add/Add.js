import React from 'react'
import StyledAdd from './StyledAdd'

export const Add = () => {
    return (
        <StyledAdd>
            <span>Chose a faire</span>
            <input type="text" id="add" name="add" required/>
            <button>Envoyez</button>
        </StyledAdd>
    )
}
