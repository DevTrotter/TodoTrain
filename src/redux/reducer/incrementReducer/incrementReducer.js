const INITIAL_STATE = {
    count: 0
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type){
        case 'INCR':
            return {
                ...state,
                count: state.count + 1
            }
        case 'DECR':
            return{
                ...state,
                count: state.count - 1
            }
        default: 
            return state;
    }
}