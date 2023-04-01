import { render, screen } from "@testing-library/react"
import { Email } from "."

describe('Name', () => {
    it('should render placeholder and label input email', () => {
        render(<Email />) //renderiza o elemento no ambiente de testes

        const input = screen.getByRole('textbox', {placeholder: /digite o seu email/i})
        const text = screen.getByText(/E-mail/i)

        expect(text).toBeInTheDocument()
        expect(input).toBeInTheDocument()
    })
})