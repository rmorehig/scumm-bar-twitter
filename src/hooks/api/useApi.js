import { useReducer, useEffect, useCallback, useMemo } from 'react'
import reducer from './reducer'
import initialState from './initialState'
import ACTIONS from './actions'

function useApi({ service, onLoad = false, params = {} }) {
  const [{ data, error, status }, dispatch] = useReducer(reducer, initialState)

  const request = useCallback(async () => {
    dispatch({ type: ACTIONS.LOADING })
    try {
      const data = await service(params)
      dispatch({ type: ACTIONS.SUCCESS, payload: { data } })
    } catch (error) {
      dispatch({ type: ACTIONS.ERROR, payload: { error } })
    }
  }, [dispatch, service])

  useEffect(() => {
    if (onLoad) {
      request()
    }
  }, [request, onLoad])

  const value = useMemo(() => ({ data, error, status, request }), [
    data,
    error,
    status,
    request
  ])

  return value
}

export default useApi
