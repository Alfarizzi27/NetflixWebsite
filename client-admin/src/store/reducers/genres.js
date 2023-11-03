const initialState = {
    data: [],
}


export default function reducer(state = initialState, action) {
    if (action.type === 'FETCH_GENRES_SUCCESS') {
        return { ...state, data: action.payload }
    }
    return state
}

