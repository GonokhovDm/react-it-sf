import React from 'react'

import './Modal.scss'

import closeSvg from '../../source/close.svg'

function Modal({ setModalIsActive }) {

  return (
    <div className="modal">
      <button className='modal__close' onClick={() => setModalIsActive(false)}>
        <img src={closeSvg} alt="close" />
      </button>
      <h1>Autorization</h1>
      <form action="POST">
        <label htmlFor="login" className='modal__input'>
          <input type="text" id="login" placeholder='&nbsp;' />
          <span className='modal__placeholder'>Login</span>
        </label>
        <label htmlFor="password" className='modal__input'>
          <input type="password" id='password' placeholder='&nbsp;' />
          <span className='modal__placeholder'>Password</span>
        </label>
        <div>
          <input type="checkbox" className='modal__checkbox' id='remember'/>
          <label htmlFor="remember"><span className='modal__checkbox-span'></span> Remember me on next login </label>
        </div>
        <input type="submit" value='Sign In'/>
      </form>
    </div>
  )
}

export default Modal
