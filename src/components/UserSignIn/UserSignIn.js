import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Form from '../Form/Form';
import style from './UserSignIn.module.css';
import { signInWithGoogle } from '../../firebase';
import { auth } from '../../firebase';

const UserSignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const signInWithEmailAndPasswordHandler = (event, email, password) => {
    // event.preventDefault();
    auth.signInWithEmailAndPassword(email, password).catch(error => {
      setError("Error signing in with password and email!");
      console.error("Error signing in with password and email", error);
    });
  };

  const change = event => {
    const {name, value} = event.currentTarget;

    if (name === 'userEmail') {
        setEmail(value);
    }
    else if (name === 'userPassword'){
      setPassword(value);
    }
  };

  const submit = event => {
    signInWithEmailAndPasswordHandler(event, email, password);
  }

  const cancel = () => {
   this.props.history.push('/');
  }

  return (
    <div className={style.UserSignIn}>
      <div className={style.SignInWrapper}>
        <h3>Sign In</h3>

        <button
          className={style.GoogleButton} onClick={signInWithGoogle}>
          Sign in with Google
        </button>

        <h5>or</h5>
        {error !== null && (
          <div>
            {error}
          </div>
        )}
        <Form
          cancel={cancel}
          submit={submit}
          submitButtonText="Sign In"
          elements={() => (
            <React.Fragment>
              <input
                id="userEmail"
                name="userEmail"
                type="email"
                value={email}
                onChange={change}
                placeholder="E-mail" />
              <input
                id="userPassword"
                name="userPassword"
                type="password"
                value={password}
                onChange={change}
                placeholder="Password" />
            </React.Fragment>
          )} />
        <p>
          <Link to = "/passwordReset" className="text-blue-500 hover:text-blue-600">
            Forgot Password?
          </Link>
        </p>
        <p>
          Don't have a user account yet? <Link to="/signup">Click here</Link> to sign up!
        </p>
      </div>
    </div>
  );
}

export default UserSignIn;
