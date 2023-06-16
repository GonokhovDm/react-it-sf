import React from 'react'

import './Button.scss'
import './ButtonMedia.scss'

function Button( {title, onClick} ) {
 
  return (
    <button onClick={onClick}>
      {title}
    </button>
  )
}

export default Button
