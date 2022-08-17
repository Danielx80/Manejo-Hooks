import React, { useState } from 'react'
import { useCounter } from '../hooks/useCounter'
import { Small } from './Small'

export const Memorize = () => {

    const{ increment, counter } = useCounter( 10 );
    const [show, setShow] = useState(true)

  return (
    <>
    <h1>Counter: <Small value={ counter } /></h1>
    <hr />

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
