import { DispatchProgressContext, ProgressContext } from "../../contexts/contexts"
import { useContext } from "react"
import { INCREMENT_PROGRESS } from "../../contexts/types"

export const MaritalState = () => {
    const dispatchProgressContext = useContext(DispatchProgressContext)
    const progressContext = useContext(ProgressContext)
  
    const selectValidation = ({ value: maritalState }) => {
      if (progressContext.maritalState.status) {
        return
      }
  
      if (maritalState === 'Solteiro' || maritalState === 'Casado' || maritalState === 'Divorciado') {
        dispatchProgressContext({ type: INCREMENT_PROGRESS, payload: { maritalState: { status: true } } })
      }
    }
  
    return (    
        <label>Estado Civil
          <select onChange={(event) => selectValidation(event.target)}>
            <option>Selecione uma opção</option>
            <option>Solteiro</option>
            <option>Casado</option>
            <option>Divorciado</option>
          </select>
        </label>    
    )
  }