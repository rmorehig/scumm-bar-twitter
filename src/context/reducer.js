import ACTIONS from './actions'

const updateItemPropertyFromArray = (array, item, property, value) => {
  const index = array.findIndex(({ id }) => id === item.id)
  if (index !== -1) {
    array = [
      ...array.slice(0, index),
      {
        ...array[index],
        [property]: value
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
        follow: updateItemPropertyFromArray(
          state.follow,
          payload.user,
          'following',
          new Date()
        )
      }
    case ACTIONS.UNFOLLOW_USER:
      return {
        ...state,
        following: state.following.filter(user => user.id !== payload.user.id),
        follow: updateItemPropertyFromArray(
          state.follow,
          payload.user,
          'following',
          false
        )
      }
    default:
      return state
  }
}

export default reducer
