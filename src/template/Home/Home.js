import { createContext, useContext, useReducer } from 'react';
import './global-style.css';

//! Dispatch it's been called every time input is valid; Need to call one time.

// todo: Create and implement a DECREMENT_PROGRESS dispatch
// todo: Separate components in different files 

//* Types need to be imported on reduce and where Dispatch function have been called;
const INCREMENT_PROGRESS = 'INCREMENT_PROGRESS'
const DECREMENT_PROGRESS = 'DECREMENT_PROGRESS'

const Progress = () => {
  const { progress } = useContext(ProgressContext)

  const maxProgress = 100;
  const minProgress = 0;
  let progressValue = progress;

  if (progressValue >= 100) {
    progressValue = maxProgress;
  }

  if (progressValue < 0) {
    progressValue = minProgress;
  }

  return (
    <section>
      <progress max='100' value={progressValue}></progress>
    </section>
  )
}

const Name = () => {
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
      <input type='text' onChange={(event) => {
        // if(progressContext.name.status){
        //   dispatchProgressContext({ type: DECREMENT_PROGRESS, payload: { name: { status: false } } })
        // }

        nameValidation(event.target)}
        } />
    </label>
  )
}

//* Logica padrão, 'imitar' nos outros componentes quando finalizada
const Email = () => {
  const dispatchProgressContext = useContext(DispatchProgressContext)
  const progressContext = useContext(ProgressContext)

  const emailValidation = ({ value: email }) => {
    if (progressContext.email.status) {
      return
    }

    if (email.includes('@gmail.com')) {
      console.log('Email válido!')
      dispatchProgressContext({ type: INCREMENT_PROGRESS, payload: { email: { status: true } } })
    }
  }

  return (
    <label>E-mail
      <input type='text' onChange={(event) => emailValidation(event.target)} />
    </label>
  )
}

const MaritalState = () => {
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

const Genre = () => {
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

const SendButton = () => {
  const { progress } = useContext(ProgressContext)
  let button = true

  if (progress >= 100) {
    button = false
  }

  return (
    <section>
      <button disabled={button} onClick={() => window.alert('Parabéns, seu formulário foi enviado!')}>
        Enviar Formulário
      </button>
    </section>
  )
}

const progressReducer = (state, actions) => {
  switch (actions.type) {
    case INCREMENT_PROGRESS: {
      const incrementAmount = state.progress + 25
      return { ...state, progress: incrementAmount, ...actions.payload } 
    }
    
    case DECREMENT_PROGRESS: {
      const decrementAmount = state.progress - 25
      return { ...state, progress: decrementAmount, ...actions.payload } 
    }

    default: {
      return { ...state, ...actions.payload }
    }
  }
}

const initialProgress = {
  progress: 0,
  name: { status: null },
  email: { status: null },
  maritalState: { status: null },
  genre: { status: null },
}

const ProgressContext = createContext()
const DispatchProgressContext = createContext()

export const Home = () => {
  const [progress, progressDispatch] = useReducer(progressReducer, initialProgress) 

  return (
    <div className="App">
      <article className='window-container'>
        <header className='title-container'>
          <h1>formulário com autenticação.</h1>
          <h2>Desafio júnior:</h2>
        </header>
        <ProgressContext.Provider value={progress}>
          <DispatchProgressContext.Provider value={progressDispatch}>
            <main className='content-container'>
              <Progress />
              <form className='main-form'>
                <Name />
                <Email />
                <MaritalState />
                <Genre />
                <SendButton />
              </form>
            </main>
          </DispatchProgressContext.Provider>
        </ProgressContext.Provider>
      </article>
    </div>
  );
}


