import React, { useEffect, useState } from 'react'
import { Message } from './Message';

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'Daniel',
        email: 'danielmg@google.com'
    });

    const { username, email } = formState;

    // para que los formularios puedan obtener otro valor
    // dentro de los inputs
    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState, 
            [ name ]: value,
        });
    }

    useEffect(() => {
    //   console.log('useEffect called');
    }, []);

    useEffect(() => {
        // console.log('useState Change');
      }, [formState]);

      useEffect(() => {
        // console.log('Email Change');
      }, [email]);
    


  return (
    <>
    
    <h1>Formulario Simple</h1>

    <hr />

    <input 
        type="text" 
        className="form-control"
        placeholder='Username' 
        name='username'
        value={ username }
        onChange={ onInputChange }
    />
    {/* para mostrar que el usuario existe  */}
    {
        (username === 'Daniel1' ) && <Message />
    }

     <input 
        type="email" 
        className="form-control mt-2"
        placeholder='danielmg@google.com' 
        name='email'
        value={ email }
        onChange={ onInputChange }
    />


    </>
  )
}
