import ACTIONS from './actions'

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
    default:
      return state
  }
}

export default reducer
