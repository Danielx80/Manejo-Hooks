import React, { useEffect, useState } from 'react'
import { useForm } from '../hooks/useForms';

export const FormWithCustomHook = () => {
    // para usar elonInputChange, username, email, password 
    // se destrutura desde el hook { useForm } 
    const { formState, onInputChange, username, email, password, onResetForm } = useForm({
            username: '',
            email: '',
            password: '',
    });
    // esto es si no se destructura
    // const { username, email, password } = formState;

  return (
    <>
    
    <h1>Formulario con custom hook</h1>

    <hr />

    <input 
        type="text" 
        className="form-control"
        placeholder='Username' 
        name='username'
        value={ username }
        onChange={ onInputChange }
    />

     <input 
        type="email" 
        className="form-control mt-2"
        placeholder='danielmg@google.com' 
        name='email'
        value={ email }
        onChange={ onInputChange }
    />
     <input 
        type="password" 
        className="form-control mt-2"
        placeholder='contrseña' 
        name='password'
        value={ password }
        onChange={ onInputChange }
    />

    <button 
    onClick={ onResetForm }
    className='btn btn-danger mt-3'>Borrar</button>

    </>
  )
}
