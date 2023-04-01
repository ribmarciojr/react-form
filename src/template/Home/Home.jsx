import { useReducer } from 'react';

import './global-style.css';

import { ProgressContext, DispatchProgressContext } from '../../contexts/contexts'
import { data } from '../../contexts/data';

import { Name } from '../../components/Name';
import { Progress } from '../../components/Progress';
import { Email } from '../../components/Email';
import { MaritalState } from '../../components/MaritialState';
import { Genre } from '../../components/Genre';
import { SendButton } from '../../components/SendButton';

import { progressReducer } from '../../contexts/progressReducer';
//! Dispatch it's been called every time input is valid; Need to call once. (solved)

// todo: Create and implement a DECREMENT_PROGRESS dispatch
// todo: usar onBlur nos campos de input text

export const Home = () => {
  const [progress, progressDispatch] = useReducer(progressReducer, data) 

  return (
    <div className="App">
      <nav>        
        <a href='https://github.com/ribmarciojr'><i class="fa-solid fa-right-from-bracket logo"></i> Veja mais</a>
      </nav>
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


