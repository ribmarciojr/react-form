import { render, screen } from "@testing-library/react"
import { Name } from "."

describe('Name', () => {
    it('should render placeholder and label input name', () => {
        render(<Name />) //renderiza o elemento no ambiente de testes

        const input = screen.getByRole('textbox', {placeholder: /digite o seu nome/i})
        const text = screen.getByText(/Nome Completo/i)

        expect(text).toBeInTheDocument()
        expect(input).toBeInTheDocument()
    })
})
