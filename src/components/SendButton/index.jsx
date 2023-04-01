import { ProgressContext } from "../../contexts/contexts"
import { useContext } from "react"


export const SendButton = () => {
    const { progress } = useContext(ProgressContext)
    let button = true
    let cursor = 'not-allowed'


    if (progress >= 100) {
      button = false
      cursor = 'pointer'
    }
  
    return (
      <section>
        <button disabled={button} style={{cursor : `${cursor}`}} onClick={() => window.alert('Parabéns, seu formulário foi enviado!')}>
          Enviar Formulário
        </button>
      </section>
    )
  }