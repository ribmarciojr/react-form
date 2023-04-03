import { render, screen } from "@testing-library/react"
import { SendButton } from "."
import { ProgressContext } from "../../contexts/contexts"



describe('SendButton', () => {
    it('should render submit button', () => { 
        const progress = {
            progress:0,
        }
        
        render(
            <ProgressContext.Provider value={progress}>
              <SendButton />  
            </ProgressContext.Provider>        
        )
            
        const button = screen.getByRole('button', {name: /enviar formulário/i}) 

        expect(button).toBeInTheDocument()
    })
    
    
    it('should be disabled while progress have not finished', () => {
        const progress = {
            progress:0,
        }
        
        render(
            <ProgressContext.Provider value={progress}>
              <SendButton />  
            </ProgressContext.Provider>        
        )
            
        const button = screen.getByRole('button', {name: /enviar formulário/i})                

        expect(button).toBeDisabled()        
    })
    
    it('should be enabled when progress have finished', () => {
        const progress = {
            progress: 100,
        }       
        
        render(
            <ProgressContext.Provider value={progress}>
              <SendButton />  
            </ProgressContext.Provider>        
        )
            
        const button = screen.getByRole('button', {name: /enviar formulário/i})                

        expect(button).toBeEnabled()        
    })
})