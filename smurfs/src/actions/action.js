import axios from 'axios';

export const FETCH_SMURF_START = 'FETCH_SMURF_START';
export const FETCH_SMURF_SUCCESS = 'FETCH_SMURF_SUCCESS';
export const FETCH_SMURF_FAIL = 'FETCH_SMURF_FAIL';

export const getSmurf = () => dispatch => {
    dispatch({ type: FETCH_SMURF_START });
    setTimeout(() => {
        axios
            .get('http://localhost:3333/smurfs')
            .then(res => {
                console.log(res.data)
                dispatch({ type: FETCH_SMURF_SUCCESS, payload: res.data })
            })
            .catch(err => dispatch({ type: FETCH_SMURF_FAIL, payload: err }))

    }, []);
}

export const postSmurf = smurf => dispatch => {
    axios
        .post('http://localhost:3333/smurfs', smurf)
        .then(res => {
            console.log(res.data)
            dispatch({ type: FETCH_SMURF_SUCCESS, payload: res.data })
        })
        .catch(err => dispatch({ type: FETCH_SMURF_FAIL, payload: err }))
}

export const del_Smurf = e => dispatch => {
    axios 
        .delete('http://localhost:3333/smurfs/{id}', e)
        .then(res => {
            console.log(res.data)
            dispatch({type: FETCH_SMURF_SUCCESS, payload: res.data})

        })
        .catch(err => dispatch({type: FETCH_SMURF_FAIL, payload: err}))}