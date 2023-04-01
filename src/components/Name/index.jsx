import { useContext } from "react"
import { DispatchProgressContext, ProgressContext } from "../../contexts/contexts"
import { INCREMENT_PROGRESS, DECREMENT_PROGRESS } from '../../contexts/types';

export const Name = () => {
    const dispatchProgressContext = useContext(DispatchProgressContext)
    const progressContext = useContext(ProgressContext)
  
    const nameValidation = ({ value: name }) => {
      const nameList = name.split(' ')
  
      if (progressContext.name.status) {
        return
      }
  
      if (nameList.length === 2 && nameList[0].length > 3 && nameList[1].length > 3) {
        console.log('Nome válido!')
        dispatchProgressContext({ type: INCREMENT_PROGRESS, payload: { name: { status: true } } })
      }
    }
    
    return (
      <label>Nome Completo
        <input type='text' placeholder="Digite o seu nome" onChange={(event) => nameValidation(event.target)} />
      </label>
    )
  }