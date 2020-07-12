import { useReducer } from 'react'
import reducer from './reducer'
import initialState from './initialState'
import ACTIONS from './actions'

function useApi(request) {
  const [{ data, error, status }, dispatch] = useReducer(reducer, initialState)

  const service = async () => {
    dispatch({ type: ACTIONS.LOADING })
    try {
      const data = await request()
      dispatch({ type: ACTIONS.SUCCESS, payload: { data } })
    } catch (error) {
      dispatch({ type: ACTIONS.ERROR, payload: { error } })
    }
  }

  return { data, error, status, service }
}

export default useApi
