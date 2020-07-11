import ACTIONS from './actions'

const reducer = (state, { type, payload }) => {
  switch (type) {
    case ACTIONS.SET_POSTS:
      return {
        ...state,
        posts: payload.posts
      }
    case ACTIONS.ADD_POST:
      return {
        ...state,
        posts: [payload.post, ...state.posts]
      }
    default:
      return state
  }
}

export default reducer
