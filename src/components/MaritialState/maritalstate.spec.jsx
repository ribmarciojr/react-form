import { render, screen } from "@testing-library/react"
import { MaritalState } from "."

describe('MaritalState', () => {
    it('should render MaritalState select box and options', () => {
        render(< MaritalState />)

        const select = screen.getByRole('combobox', {name: /Estado Civil/i})

        const single = screen.getByRole('option', { name: /solteiro/i})
        const married = screen.getByRole('option', { name: /casado/i})
        const divorced = screen.getByRole('option', { name: /divorciado/i})

        expect(select).toBeInTheDocument()

        expect(single).toBeInTheDocument()
        expect(married).toBeInTheDocument()
        expect(divorced).toBeInTheDocument()
    })
})