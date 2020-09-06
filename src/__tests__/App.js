import React from 'react'
import { screen, render } from '@testing-library/react'
import App from '../App'

describe('App', () => {
  it('renders properly', async () => {
    render(<App />)
    expect(
      screen.getByRole('complementary', { name: /following users/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('complementary', { name: /users to follow/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('textbox', { name: /search users to follow/i })
    ).not.toHaveValue()
  })
})
