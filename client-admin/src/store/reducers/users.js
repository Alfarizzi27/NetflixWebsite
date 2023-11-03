const initialState = {
    email: "",
    password: ""
}

export default function reducer(state = initialState, action) {
    if (action.type === "LOGIN_SUCCESS") {
        return { ...state, data: action.payload }
    }
    return state
}