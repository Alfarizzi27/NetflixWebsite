export const fetchMoviesSuccess = payload => {
    return { type: 'FETCH_MOVIES_SUCCESS', payload }
}

export const fetchMoviesStart = () => {
    return async dispatch => {
        try {
            let response = await fetch("http://localhost:3000/customer/movies", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });
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

export const fetchDetailSuccess = payload => {
    return { type: 'FETCH_DETAIL_SUCCESS', payload }
}

export const fetchDetailStart = () => {
    return async dispatch => {
        try {
            let response = await fetch("http://localhost:3000/customer/movies/" + id, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            })

            if (!response.ok) {
                throw { name: "gagal fetch" };
            }
            response = await response.json();
            dispatch(fetchDetailSuccess(response))
        } catch (error) {
            console.log(error);
        }
    }
}
