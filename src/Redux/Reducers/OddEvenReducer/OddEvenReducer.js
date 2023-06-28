const initialState = {
    history : [
        {number:1,isOddEven:'Odd'},
        {number:2,isOddEven:'Even'},
        {number:3,isOddEven:'Odd'},
        {number:4,isOddEven:'Even'},
    ]
};

const oddevenHistoryReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'insert':
            return{
                ...state,
                history: [...state.history,{number:action.payload.number,isOddEven:action.payload.isOddEven}]
            }
        default:
            return state
    }
};

export default oddevenHistoryReducer;