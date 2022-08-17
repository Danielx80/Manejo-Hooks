import { useState } from "react"
//  Este Hook esta ligado o fue usado con el ejemplo
// 01-useState 
// CounterWhithCustomHook.jsx
export const useCounter = ( initialValue = 10 ) => {

    const [counter, setCounter] = useState(initialValue)
    // Sirve para cambiar el valor del use counter a +1
    const increment = (value = 1) => {
        setCounter( counter + value );
    }
    // con el value = 1 se puede mandar a llamar en el 
    // onClick y poner un valor para que incremente
    // de 2 en 2 o 3 en 3 por ejemplo
    const decrement = (value = 1 ) => {
        // Si esl estado es igual o menos a cero no hace nada 
        if( counter == 0) return;
        setCounter( counter - value  );
    }

    const reset = () => {
        setCounter( initialValue );
    }


 

    return {
        counter, 
        increment,
        decrement,
        reset
    }
}