import React from 'react'
import { memo } from 'react'


// con el memo ya no se redibuja en la consola el mensaje
// solo se redibuja en el button donde hace referencia
export const Small = memo(({ value }) => {

    console.log('Me volvia redibujar ')

  return (
    <small>{ value }</small>
  )
})
