import { render, screen } from '@testing-library/react'

import Main from '.'

describe('<Main />', () => {
  it('should render the heading', () => {
    // renderizar o componente 'Main'
    const { container } = render(<Main />)
    // busca o elemento e verifica se ele existe
    expect(
      screen.getByRole('heading', { name: /react avançado/i })
    ).toBeInTheDocument()

    // verifica se a descrição padrão está presente
    expect(
      screen.getByText(/typescript, reactjs, nextjs and styled components/i)
    ).toBeInTheDocument()

    // verifica se o logo está presente
    expect(screen.getByAltText('React Avançado Logo')).toBeInTheDocument()

    // verifica se a ilustração está presente
    expect(
      screen.getByAltText('Um desenvolvedor de frente para uma tela com código')
    ).toBeInTheDocument()

    // gerar snapshot
    expect(container.firstChild).toMatchSnapshot()

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
