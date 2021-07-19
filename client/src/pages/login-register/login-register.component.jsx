import React from 'react';

import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

import './login-register.styles.scss';

const LoginRegister = () => (
  <div className="login-register">
    <SignIn />
    <SignUp />
  </div>
)

export default LoginRegister;