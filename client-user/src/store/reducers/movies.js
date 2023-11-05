const initialState = {
    data: [],
    editData: "",
    isLoad: true,
    detailData: []
}


export default function reducer(state = initialState, action) {
    if (action.type === 'FETCH_MOVIES_SUCCESS') {
        return { ...state, data: action.payload }
    } else if (action.type === 'FETCH_DETAIL_SUCCESS') {
        return { ...state, editData: action.payload }
    } else if (action.type === 'EDIT_DETAIL_SUCCESS') {
        return { ...state, detailData: action.payload }
    } else if (action.type === 'DELETE_SUCCESS') {
        return { ...state, data: action.payload }
    } else if (action.type === 'SKELETON_SUCCESS') {
        return { ...state, isLoad: false }
    }

    return state
}

