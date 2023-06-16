import React, {useState} from 'react'

import './Modal.scss'
import './ModalMedia.scss'

import usersDb from "../../source/usersDb.json";
import closeSvg from '../../source/close.svg'

function Modal({ modalIsActive, setModalIsActive, isAutorized, setIsAutorized }) {

  const [loginValue, setLoginValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  const onChangeLogin = (event) => {
    setLoginValue(event.target.value);
  }

  const onChangePassword = (event) => {
    setPasswordValue(event.target.value);
  }

  const onSubmitClick = () => {
    for (let i = 0; i = usersDb.length; i++) {
      if ((usersDb[i].login === loginValue) && (usersDb[i] === passwordValue)) {
        alert('verify')
      }
    }
  }

  return (
    <div className={`modal ${modalIsActive ? 'active' : ''}`}>
      <button className='modal__close' onClick={() => setModalIsActive(false)}>
        <img src={closeSvg} alt="close" />
      </button>
      <h1>Autorization</h1>
      <form action="POST">
        <label htmlFor="login" className='modal__input'>
          <input type="text" id="login" placeholder='&nbsp;' onChange={onChangeLogin} />
          <span className='modal__placeholder'>Login</span>
        </label>
        <label htmlFor="password" className='modal__input'>
          <input type="password" id='password' placeholder='&nbsp;' onChange={onChangePassword} />
          <span className='modal__placeholder'>Password</span>
        </label>
        <div>
          <input type="checkbox" className='modal__checkbox' id='remember'/>
          <label htmlFor="remember"><span className='modal__checkbox-span'></span> Remember me on next login </label>
        </div>
        <input type="submit" value='Sign In' onSubmit={onSubmitClick}/>
      </form>
    </div>
  )
}

export default Modal
