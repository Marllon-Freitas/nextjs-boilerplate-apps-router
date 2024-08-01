import { render, screen } from '@testing-library/react'

import Main from '.'

describe('<Main />', () => {
  it('should render the heading', () => {
    // renderizar o componente 'Main'
    const { container } = render(<Main />)
    // busca o elemento e verifica se ele existe
    expect(
      screen.getByRole('heading', { name: /hello world/i })
    ).toBeInTheDocument()

    // gerar snapshot
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the colors correctly', () => {
    // renderizar o componente 'Main'
    const { container } = render(<Main />)
    // busca o elemento e verifica se background-color é correto
    expect(container.firstChild).toHaveStyle({ 'background-color': '#06092b' })
  })
})
