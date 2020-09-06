export const mockPosts = [
  {
    id: 4,
    createdAt: '2020-06-10T22:37:08.056Z',
    content:
      "Having coverage doesn't give confidence, the important thing is to write good tests which covers important scenarios",
    userId: 3,
    user: {
      id: 3,
      name: 'Charlie Smith',
      username: 'chsmith',
      following: '2020-06-26T23:46:55.113Z',
      avatar:
        'https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80',
    },
  },
  {
    id: 3,
    createdAt: '2019-12-17T22:37:08.056Z',
    content: "You can't hide, Rey. Not from me.",
    userId: 5,
    user: {
      id: 5,
      name: 'Kylo Ren',
      username: 'kyloren',
      following: '2019-06-26T23:46:55.113Z',
      avatar:
        'https://images.unsplash.com/photo-1591927675938-b81b071d3e91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
    },
  },
]

export const mockUsers = [
  {
    id: 3,
    name: 'Charlie Smith',
    username: 'chsmith',
    avatar:
      'https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80',
    posts: [
      {
        id: 4,
        createdAt: '2020-06-10T22:37:08.056Z',
        content:
          "Having coverage doesn't give confidence, the important thing is to write good tests which covers important scenarios",
        userId: 3,
      },
    ],
  },
  {
    id: 4,
    name: 'Ben Kenobi',
    username: 'benkenobi',
    followedAt: '2019-07-26T23:46:55.113Z',
    avatar:
      'https://images.unsplash.com/photo-1524582642571-404d774f344f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
    posts: [],
  },
  {
    id: 5,
    name: 'Kylo Ren',
    username: 'kyloren',
    followedAt: '2019-06-26T23:46:55.113Z',
    avatar:
      'https://images.unsplash.com/photo-1591927675938-b81b071d3e91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
    posts: [],
  },
]

export function mockFetch(data) {
  return jest.fn().mockImplementation(() =>
    Promise.resolve({
      ok: true,
      json: () => data,
    })
  )
}

export const mockFriends = [
  {
    id: 4,
    followedAt: '2019-09-28T22:37:08.056Z',
  },
  {
    id: 5,
    followedAt: '2020-09-28T22:37:08.056Z',
  },
]

export const mockUsersToFollow = [
  {
    id: 4,
    username: 'user4',
  },
  {
    id: 5,
    username: 'user5',
  },
]

export const mockMe = {
  id: 1,
  username: 'rmorehig',
  name: 'Rafa Moreno',
  avatar:
    'https://pbs.twimg.com/profile_images/1156456662598897664/ApYcPPiq_400x400.jpg',
}

export const mockPostsToFilter = [
  {
    id: 1,
    createdAt: '2019-05-10T22:37:08.056Z',
    content: 'one post',
    userId: 1,
    user: {
      id: 1,
      me: true,
    },
  },
  {
    id: 2,
    createdAt: '2019-09-28T22:37:08.056Z',
    content: 'one post',
    userId: 3,
    user: {
      id: 3,
      following: false,
    },
  },
  {
    id: 3,
    createdAt: '2019-09-28T22:37:08.056Z',
    content: 'one post',
    userId: 4,
    user: {
      id: 4,
      following: '2019-09-28T22:37:08.056Z',
    },
  },
]

export const mockPostBeforeCreate = {
  createdAt: '2019-05-10T22:37:08.056Z',
  content: 'one post',
  userId: 1,
}

export const mockDate = '2019-05-14T11:01:58.135Z'

export const mockUser = {
  id: 123,
  username: 'johndoe',
  name: 'John Doe',
}

export const mockFriend = {
  ...mockUser,
  followedAt: '2019-07-26T23:46:55.113Z',
}
