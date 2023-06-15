import React from 'react'

import './Button.scss'

function Button( {title, onClick} ) {
 
  return (
    <button onClick={onClick}>
      {title}
    </button>
  )
}

export default Button
