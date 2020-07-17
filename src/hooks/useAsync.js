import { useCallback, useReducer } from 'react'
import useSafeDispatch from './useSafeDispatch'

const initialState = {
  status: 'idle',
  data: null,
  error: null
}

const ACTIONS = {
  LOADING: 'LOADING',
  SUCCESS: 'SUCCESS',
  ERROR: 'ERROR'
}

const reducer = (state, { type, payload }) => {
  switch (type) {
    case ACTIONS.LOADING:
      return {
        ...state,
        status: 'loading'
      }
    case ACTIONS.SUCCESS:
      return {
        ...state,
        status: 'success',
        data: payload.data
      }
    case ACTIONS.ERROR:
      return {
        ...state,
        status: 'error',
        error: payload.error
      }
    default: {
      throw new Error(`Unhandled action type: ${type}`)
    }
  }
}

function useAsync() {
  const [{ status, data, error }, dispatch] = useReducer(reducer, initialState)
  const safeDispatch = useSafeDispatch(dispatch)

  const run = useCallback(
    promise => {
      dispatch({ type: ACTIONS.LOADING })
      promise
        .then(data => {
          safeDispatch({ type: ACTIONS.SUCCESS, payload: { data } })
        })
        .catch(error => {
          safeDispatch({ type: ACTIONS.ERROR, payload: { error } })
        })
    },
    [safeDispatch]
  )
  return {
    status,
    data,
    error,
    run
  }
}

export default useAsync
