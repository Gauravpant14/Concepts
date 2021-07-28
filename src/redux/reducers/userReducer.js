const initialCount = 10 

export  const countReducer = (state = initialCount ,action) => {
    switch(action.type){
        case 'INC_COUNT':
            return state +1;
        default:
            return state;
    }
}

export default countReducer