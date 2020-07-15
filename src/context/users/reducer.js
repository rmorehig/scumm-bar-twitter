import ACTIONS from './actions'

const updateItemFromArray = (array, item) => {
  const index = array.findIndex(({ id }) => id === item.id)
  if (index !== -1) {
    array = [
      ...array.slice(0, index),
      {
        ...item
      },
      ...array.slice(index + 1)
    ]
    return array
  }
}

const reducer = (state, { type, payload }) => {
  switch (type) {
    case ACTIONS.SET_FOLLOWING_USERS:
      return {
        ...state,
        following: payload.users
      }
    case ACTIONS.SET_FOLLOW_USERS:
      return {
        ...state,
        follow: payload.users
      }
    case ACTIONS.FOLLOW_USER:
      return {
        ...state,
        following: [...state.following, payload.user],
        follow: updateItemFromArray(state.follow, payload.user)
      }
    case ACTIONS.UNFOLLOW_USER:
      return {
        ...state,
        following: state.following.filter(user => user.id !== payload.user.id),
        follow: updateItemFromArray(state.follow, payload.user)
      }
    default:
      return state
  }
}

export default reducer
