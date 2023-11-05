export const skeleton = () => {
    return { type: 'SKELETON_SUCCESS' }
}

export const fetchMoviesSuccess = payload => {
    return { type: 'FETCH_MOVIES_SUCCESS', payload }
}

export const fetchMoviesStart = () => {
    return async dispatch => {
        try {
            let response = await fetch("http://localhost:3000/user/movies", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "access_token": localStorage.access_token
                },
            });
            if (!response.ok) {
                throw { name: "gagal fetch" };
            }

            response = await response.json();
            dispatch(fetchMoviesSuccess(response))
        } catch (error) {
            console.log(error);
        } finally {
            dispatch(skeleton())
        }
    }
}

export const fetchGenresSuccess = payload => {
    return { type: 'FETCH_GENRES_SUCCESS', payload }
}

export const fetchGenresStart = () => {
    return async dispatch => {
        try {
            let response = await fetch("http://localhost:3000/user/genres", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "access_token": localStorage.access_token
                },
            });
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
            Swal.fire(
                'Success!',
                'Success Login',
                'success'
            )
            // dispatch(fetchMoviesSuccess(response))
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: error.name,
            })

        }
    }
}

export const fetchDetailSuccess = payload => {
    return { type: 'FETCH_DETAIL_SUCCESS', payload }
}

export const fetchDetailStart = (id) => {
    return async dispatch => {
        try {
            let response = await fetch("http://localhost:3000/user/movies/" + id, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "access_token": localStorage.access_token
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

export const deleteGenresSuccess = payload => {
    return { type: 'DELETE_GENRES_SUCCESS', payload }
}

export const deleteGenresStart = (id) => {
    return async (dispatch) => {
        try {
            const result = await Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            });
            if (result.isConfirmed) {
                let response = await fetch("http://localhost:3000/user/genres/" + id, {
                    method: 'DELETE', headers: {
                        "Content-Type": "application/json",
                        "access_token": localStorage.access_token
                    },
                })

                if (!response.ok) {
                    throw { name: "gagal delete" };
                }

                dispatch(fetchGenresStart())

                await Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                );
            }
        } catch (error) {
            console.log(error);
        }
    }
}

export const deleteSuccess = payload => {
    return { type: 'DELETE_SUCCESS', payload }
}

export const deleteStart = (id) => {
    return async (dispatch) => {
        try {
            const result = await Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            });
            if (result.isConfirmed) {
                let response = await fetch("http://localhost:3000/user/movies/" + id, {
                    method: 'DELETE', headers: {
                        "Content-Type": "application/json",
                        "access_token": localStorage.access_token
                    },
                })

                if (!response.ok) {
                    throw { name: "gagal delete" };
                }

                dispatch(fetchMoviesStart())

                await Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                );
            }
        } catch (error) {
            console.log(error);
        }
    }
}

export const addAdminStart = (payload) => {
    return async (dispatch) => {
        try {
            let response = await fetch("http://localhost:3000/user/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload)
            })

            if (!response.ok) {
                response = await response.json()
                throw { name: response.message };
            }

            Swal.fire(
                'Success!',
                'Success Add Admin',
                'success'
            )

        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: error.name,
            })
        }
    }
}

export const addGenresStart = (payload) => {
    return async (dispatch) => {
        try {
            let response = await fetch("http://localhost:3000/user/genres", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "access_token": localStorage.access_token
                },
                body: JSON.stringify(payload)
            })

            console.log(response);

            if (!response.ok) {
                response = await response.json()
                throw { name: response.message };
            }

            dispatch(fetchGenresStart())

            Swal.fire(
                'Success!',
                'Success Add Genres',
                'success'
            )
        } catch (error) {
            console.log(error);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: error.name,
            })
        }
    }
}

export const addMovieStart = (payload) => {
    return async (dispatch) => {
        try {

            let response = await fetch("http://localhost:3000/user/movies", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "access_token": localStorage.access_token
                },
                body: JSON.stringify(payload)
            })

            if (!response.ok) {
                response = await response.json()
                throw { name: response.message };
            }

            dispatch(fetchMoviesStart())

            Swal.fire(
                'Success!',
                'Success Add Movies',
                'success'
            )
            // console.log(response);

        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: error.name,
            })
        }
    }
}

export const editDetailStart = (id, payload) => {
    return async (dispatch) => {
        try {
            console.log(payload);
            let response = await fetch("http://localhost:3000/user/movies" + id, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "access_token": localStorage.access_token
                },
                body: JSON.stringify(payload)
            })

            if (!response.ok) {
                response = await response.json()
                throw { name: response.message };
            }

            dispatch(fetchMoviesStart())

            Swal.fire(
                'Success!',
                'Success Add Movies',
                'success'
            )

        } catch (error) {
            console.log(error);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: error.name,
            })
        }
    }
}