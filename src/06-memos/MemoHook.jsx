import React, { useMemo, useState } from 'react'
import { useCounter } from '../hooks/useCounter'


const heavyStuff = ( iterationNumber = 100 ) => {
  for(let i = 0; i < iterationNumber; i++){
    console.log('ahi vamos...')
  }

  return `${ iterationNumber } iteraciones realizadas `
}

export const MemoHook = () => {

    const{ increment, counter } = useCounter( 400 );
    const [show, setShow] = useState(true)


    // para evitar que se vuelva a disparar cada que haya un cambio 
    // y si solo si las dependencias cambian
    const memorizeValue = useMemo( () => heavyStuff(counter), [counter] );

  return (
    <>
    <h1>Counter: <small>{ counter }</small></h1>
    <hr />

    {/*  para evitar que se hagan procesos pesados */}
    <h4>{ memorizeValue } </h4>


    {/* <h4>{ heavyStuff(counter) }</h4> */}


    <button
    className='btn btn-primary'
    // Se llama de esta manera por que es un argumento
    onClick={ () => increment() }>
        +1
    </button>

    <button
    className='btn btn-primary'
    onClick={ () => setShow(!show)}>
        show/Hide { JSON.stringify(show)}
    </button>
    </>
  )
}
