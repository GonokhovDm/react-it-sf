import React from 'react'

import './Button.scss'
import './ButtonMedia.scss'

function Button( {title, onClick, styleClass} ) {
 
  return (
    <button onClick={onClick} className={styleClass}>
      {title}
    </button>
  )
}

export default Button
