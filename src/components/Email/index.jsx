import { DispatchProgressContext, ProgressContext } from "../../contexts/contexts"
import { useContext } from "react"
import { INCREMENT_PROGRESS } from "../../contexts/types"

export const Email = () => {
    const dispatchProgressContext = useContext(DispatchProgressContext)
    const progressContext = useContext(ProgressContext)
  
    const emailValidation = ({ value: email }) => {
      if (progressContext.email.status) {
        return
      }
      
      const pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
      
      if (pattern.test(email.toLowerCase())) {      
        dispatchProgressContext({ type: INCREMENT_PROGRESS, payload: { email: { status: true } } })
      }
    }
  
    return (
      <label>E-mail
        <input type='text' placeholder="Digite o seu email" onChange={(event) => emailValidation(event.target)} />
      </label>
    )
  }