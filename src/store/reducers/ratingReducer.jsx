const initState = {}

const ratingReducer = (state = initState, action) => {
    switch(action.type) {
        case 'ADD_RATE_ERROR':
            return {
                ...state
            }
        case 'ADD_RATE_SUCCESS':
            return {
                ...state
            }
        default:
            return {
                state
            }         
    }
}

export default ratingReducer