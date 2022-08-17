import React, { useState } from 'react'
import { useCounter } from '../hooks/useCounter'

export const CounterWhithCustomHook = () => {

    const { counter, increment, decrement, reset } = useCounter();

  return (
    <>
    <h1>Counter Whith Hook: { counter }</h1>

    <hr />
    {/*  aquie el ejemplo del incremento de 2 en 2 */}
    <button className='btn btn-success' onClick={ () => increment(2) } >+2</button>
    <button className='btn btn-warning' onClick={ reset }>Reset</button>
   {/* aqui el decremento en 3 en 3 */}
    <button className='btn btn-danger' onClick={ () => decrement(3) }>-3</button>

    </>
  )
}
