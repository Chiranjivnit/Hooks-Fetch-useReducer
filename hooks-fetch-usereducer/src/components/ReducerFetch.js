import React, { useEffect, useReducer } from 'react';
import API from '../apiService/apiService';
import { CircularProgress } from '@material-ui/core';

const initialState = {
    loading: true,
    err: '',
    sucessData: {}
}

const reducer = (state, action) => {
    switch (action.type) {

        case 'FETCH_SUCCESS':
            return {
                loading: false,
                sucessData: action.payload,
                err: ''
            }

        case 'FETCH_FAILED':
            return {
                loading: false,
                err: 'something went wrong',
                post: {}
            }
        default:
            return state
    }
}

const ReducerFetch = () => {

    const [state, dispatch] = useReducer(reducer, initialState)

    console.log('ReducerFetch', state)
    useEffect(() => {
        API.get(`1`)
            .then((res) => {
                console.log(res)
                dispatch({ type: 'FETCH_SUCCESS', payload:res.data})

            })
            .catch((err) => {
                console.log(err)
                dispatch({ type: 'FETCH_FAILED', })
            })
    }, [])

    return (
        <div>
            {state.loading ? <CircularProgress size={34} /> : <h1>{state && state.sucessData && state.sucessData.title ? state.sucessData.title : []}</h1>}
            {state.err != '' ? state.err : null}
        </div>
    )
}
export default ReducerFetch;