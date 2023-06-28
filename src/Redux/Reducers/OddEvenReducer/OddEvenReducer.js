const initialState = {
    history : [
        // {number: 1, isOddEven: 'Odd'}
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