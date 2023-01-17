import React, { useState } from 'react';
import { Navigate, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { registeration } from '../../redux/user/RegisterLoginSlice';

const Register = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(false);
  const user = useSelector((state) => state.user);

  const formSubmit = (e) => {
    e.preventDefault();
    if (email && username) {
      dispatch(registeration({ email, username }));
      setLoading(true);
    }
    if (user.error) {
      setErr(true);
      setLoading(false);
    }
  };

  if (user.logged_in) {
    return <Navigate replace to="/login" />;
  }
  return (
    <div
      className="container-reg"
    >
      <h2 className="register-title">Sign Up</h2>
      { err ? <p className="text-amber-700 ">{user.error}</p> : '' }
      <form onSubmit={formSubmit} className="reg-form">
        <div className="form-inputs">
          <input
            type="email"
            className="form-input"
            id="floatingInput"
            placeholder="name@example.com"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="username">
          <input
            type="text"
            className="form-username"
            id="floatingUsername"
            placeholder="Username"
            value={username}
            required
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        {loading ? (
          <button className="px-2 py-2" type="button">Loading...</button>
        ) : (
          <button type="submit" className="btn-reg">
            Sign up
          </button>
        )}
      </form>
      <p>
        Already have an Account?
        <NavLink to="/login">
          <span>Log in</span>
        </NavLink>
      </p>
    </div>
  );
};

export default Register;
