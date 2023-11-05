const initialState = {
    email: "",
    password: "",
    addDatas: {
        username: "",
        email: "",
        password: "",
        phoneNumber: "",
        address: "",
    }
}

export default function reducer(state = initialState, action) {
    if (action.type === "LOGIN_SUCCESS") {
        return { ...state, data: action.payload }
    } else if (action.type === "ADD_ADMIN_SUCCESS") {
        return { ...state, data: action.payload }
    }
    return state
}