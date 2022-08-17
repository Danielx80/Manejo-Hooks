import React from 'react'
import { useCounter } from '../hooks/useCounter';
import { useFetch } from '../hooks/useFetch'
import { LoadingQuote } from '../03-examples';
import { Quote } from '../03-examples';


export const Layout = () => {


    const { counter, increment } = useCounter(1);
    const { data, isLoading, hasError } = useFetch(`https://www.breakingbadapi.com/api/quotes/${ counter }`)
    
    // desestructura para llamarlo solo poner author, quote
    const { author, quote } = !!data && data[0];

    return (       
    <>
    <h1>Breaking bad Qoutes</h1>
    <hr />


    {/* Ternario para cargar el estado de la aplicacion
    mostrata primero el Cargando... y despues la informacion        { */}
          
          {
            isLoading ?
             <LoadingQuote /> :
              <Quote 
              author={author}
              quote={quote}
              />
          }
        

        <button className='btn btn-danger'
        disabled={ isLoading }
        onClick={ () => increment() } >
            Next Quote
        </button>
    </>
  )
}
