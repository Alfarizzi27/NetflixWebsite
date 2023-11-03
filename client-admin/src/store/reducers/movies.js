const initialState = {
    data: [],
    editData: ""
}


export default function reducer(state = initialState, action) {
    if (action.type === 'FETCH_MOVIES_SUCCESS') {
        return { ...state, data: action.payload }
    } else if (action.type === 'FETCH_DETAIL_SUCCESS') {
        return { ...state, editData: action.payload }
    } else if (action.type === 'DELETE_SUCCESS') {
        return { ...state, data: action.payload }
    }
    return state
}

