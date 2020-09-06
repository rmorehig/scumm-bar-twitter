import React from 'react'
import { screen, render } from '@testing-library/react'
import Home from 'pages/Home'

describe('Home', () => {
  it('renders properly', async () => {
    render(<Home />)
    expect(
      screen.getByRole('banner', { name: /post message/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /post message/i })).toBeDisabled()
    expect(
      screen.getByRole('region', { name: /home wall/i })
    ).toBeInTheDocument()
  })
})
