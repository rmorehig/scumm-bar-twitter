import React from 'react'
import { screen, render } from '@testing-library/react'
import App from '../App'

describe('App', () => {
  it('renders without crashing', async () => {
    render(<App />)
    expect(
      screen.getByRole('banner', { name: /post message/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /post message/i })).toBeDisabled()
    expect(
      screen.getByRole('region', { name: /home wall/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('complementary', { name: /following users/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('complementary', { name: /users to follow/i })
    ).toBeInTheDocument()
  })
})
