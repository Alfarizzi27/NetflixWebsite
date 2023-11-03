const initialState = {
    show: false
}

export default function reducer(state = initialState, action) {
    if (action.type === 'SHOW_MODAL') {
        return { ...state, show: action.payload }
    }
    return state
}