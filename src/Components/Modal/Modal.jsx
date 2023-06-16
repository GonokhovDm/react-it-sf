import React, {useState} from 'react'
import Button from '../Button/Button';

import './Modal.scss'
import './ModalMedia.scss'

import usersDb from "../../source/usersDb.json";
import closeSvg from '../../source/close.svg'

function Modal({ modalIsActive, setModalIsActive, setIsAutorized }) {

  const [loginValue, setLoginValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  const onSubmitClick = () => {

    for (let i = 0; i < usersDb.length; i++) {
      if ((usersDb[i].login === loginValue) && (usersDb[i].password === passwordValue)) {
        setModalIsActive(false);
        setIsAutorized(true);
        return
      } else {
        alert(`Wrong login or password. Try it: \n
        1. login: testlogin password: testpassword \n
        2. login: myloginisawesome password: mypasswordissafe \n
        3. login: logi1111 password: logi2222 \n`);
        return
      }
    }

    if (!isChecked) {
      setLoginValue('');
      setPasswordValue('');
    }
  }

  return (
    <div className={`modal ${modalIsActive ? 'active' : ''}`}>
      <button className='modal__close' onClick={() => setModalIsActive(false)}>
        <img src={closeSvg} alt="close" />
      </button>
      <h1>Autorization</h1>
      <div className="form">
        <label htmlFor="login" className='modal__input'>
          <input type="text" id="login" value={loginValue} placeholder='&nbsp;' onChange={(e) => setLoginValue(e.target.value)} />
          <span className='modal__placeholder'>Login</span>
        </label>
        <label htmlFor="password" className='modal__input'>
          <input type="password" id='password' value={passwordValue} placeholder='&nbsp;' onChange={(e) => setPasswordValue(e.target.value)} />
          <span className='modal__placeholder'>Password</span>
        </label>
        <div className='modal__checkbox'>
          <input type="checkbox" className='modal__checkbox-custom' id='remember' onChange={() => setIsChecked(!isChecked)}/>
          <label htmlFor="remember"><span className='modal__checkbox-span'></span> Remember me on next login </label>
        </div>
        <Button title='Sign In' onClick={onSubmitClick}/>
      </div>
    </div>
  )
}

export default Modal
