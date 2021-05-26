import React, { useState, useContext, useEffect } from 'react';
import AlertContext from '../context/alert/alertContext';
import AuthContext from '../context/auth/authContext';
import "./log.css";

const Signup = props => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);

  const { setAlert } = alertContext;
  const { register, error, clearErrors, isAuthenticated } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push('/');
    }

    if (error === 'User already exists') {
      setAlert(error, 'danger');
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const [user, setUser] = useState({
    first_name: '',
    last_name: '',
    username: '',
    password: ''
  });

  const { first_name, last_name, username, password } = user;

  const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (first_name === '' || last_name === '' || username === '' || password === '') {
      setAlert('Please enter all fields', 'danger');
    } else {
      register({
        first_name,
        last_name,
        username,
        password
      });
    }
  };

  return (
    <div className='form-container'>
      <center>
        <div><b>Create An Account</b></div>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label htmlFor='name'>First Name</label>
          <input
            id='first_name'
            type='text'
            name='first_name'
            value={first_name}
            onChange={onChange}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='last_name'>Last Name</label>
          <input
            id='last_name'
            type='text'
            name='last_name'
            value={last_name}
            onChange={onChange}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='password'>Username</label>
          <input
            id='username'
            type='username'
            name='username'
            value={username}
            onChange={onChange}
            required
            minLength='6'
          />
        </div>
        <div className='form-group'>
          <label htmlFor='password'>Password</label>
          <input
            id='password'
            type='password'
            name='password'
            value={password}
            onChange={onChange}
            required
            minLength='6'
          />
        </div>
        <div>
          <a className= "credentials" href="/login">Already have an account.</a>
        </div>
        <input
          type='submit'
          value='Register'
          className='btn btn-primary btn-block'
        />
      </form>
      </center>
    </div>
  );
};

export default Signup;
