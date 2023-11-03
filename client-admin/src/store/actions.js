import { toast } from "react-toastify";

export const fetchMoviesSuccess = payload => {
    return { type: 'FETCH_MOVIES_SUCCESS', payload }
}

export const fetchMoviesStart = (url) => {
    return async dispatch => {
        try {
            let response = await fetch("http://localhost:3000/" + url);

            if (!response.ok) {
                throw { name: "gagal fetch" };
            }

            response = await response.json();
            dispatch(fetchMoviesSuccess(response))
        } catch (error) {
            console.log(error);
        }
    }
}

export const fetchGenresSuccess = payload => {
    return { type: 'FETCH_GENRES_SUCCESS', payload }
}

export const fetchGenresStart = (url) => {
    return async dispatch => {
        try {
            let response = await fetch("http://localhost:3000/" + url);

            if (!response.ok) {
                throw { name: "gagal fetch" };
            }

            response = await response.json();
            dispatch(fetchGenresSuccess(response))
        } catch (error) {
            console.log(error);
        }
    }
}

export const showModalSuccess = payload => {
    return { type: 'SHOW_MODAL', payload }
}

export const showModalstart = () => {
    return async dispatch => {
        try {
            dispatch(showModalSuccess(true))
        } catch (error) {
            console.log(error);
        }
    }
}

export const loginSuccess = payload => {
    return { type: 'LOGIN_SUCCESS', payload }
}

export const loginStart = (payload, navigate) => {
    return async dispatch => {
        try {
            let response = await fetch("http://localhost:3000/user/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload)
            });


            if (!response.ok) {
                response = await response.json()
                throw { name: response.message };
            }

            response = await response.json();
            localStorage.access_token = response.access_token
            navigate('/')
            toast.success("Success Notification !", {
                position: toast.POSITION.TOP_RIGHT
            });
            // dispatch(fetchMoviesSuccess(response))
        } catch (error) {
            console.log(error, "<<<<");
            toast.error("Success Notification !", {
                position: toast.POSITION.TOP_CENTER
            });

        }
    }
}