import React, { useCallback, useEffect, useState } from 'react'
import { ShowIncrement } from './ShowIncrement'

export const CallbackHook = () => {

    const [counter, setCounter] = useState(15);


    // Para evitar el valor en memoria 
    // hace que use el mismo espaio en memoria
    const incrementFather = useCallback(
        // para hacer un incremento diferene es llamando al hijo
        // en este caso es value y esta en
        // ShowIncrement.jsx
        (value) => {
            setCounter( (c) => c + value)
        
            // setCounter( (value) => value + 1  );
      },
      [],
    );


    useEffect(() => {
    //   incrementFather();
    }, [incrementFather])
    
    
    //   se redibuja el valor en memoria
    // const incrementFather = () => {
    //     setCounter(counter + 1 );
    // }


    return (
            <>
                <h1>UseCallback Hook: { counter }</h1>
                <hr />



                <ShowIncrement increment={incrementFather}/>
            </>
  )
}
