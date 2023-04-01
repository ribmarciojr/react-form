import { DispatchProgressContext, ProgressContext } from "../../contexts/contexts"
import { useContext } from "react"
import { INCREMENT_PROGRESS } from "../../contexts/types"


export const Genre = () => {
    const dispatchProgressContext = useContext(DispatchProgressContext)
    const progressContext = useContext(ProgressContext)
  
    const genreValidation = ({ value: genre }) => {
      if (progressContext.genre.status) {
        return
      }
  
      if (genre === 'masculino' || genre === 'feminino') {
        dispatchProgressContext({ type: INCREMENT_PROGRESS, payload: { genre: { status: true } } })
      }
    }
  
    return (
      <fieldset onChange={(event) => genreValidation(event.target)}>
        <legend>
          Gênero
        </legend>
  
        <input type='radio' name='genre' value='masculino' />
        <label>Masculino</label>
  
        <input type='radio' name='genre' value='feminino' />
        <label>Feminino</label>
      </fieldset>
    )
  }