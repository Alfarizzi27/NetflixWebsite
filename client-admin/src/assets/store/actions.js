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