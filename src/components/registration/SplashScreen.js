import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/doc.png';

const SplashScreen = () => (
  <>
    <section className="splash-sec">
      <div className="overlay" />
      <div className="top sm:mt-[120px]">
        <div className="logo-div1">
          <img src={logo} alt="name" className="logo1" />
        </div>
        <div className="welcome-text">
          <h1 className="text">Welcome Back</h1>
          <p className="text-two">Login to your Account</p>
        </div>
        <NavLink to="/login" className="login-btn btn-login">
          <span>Login</span>
        </NavLink>
      </div>
      <div className="bottom sm:mb-[140px]">
        <p className="register-link">
          Don&apos;t have an account?
          {' '}
          <NavLink to="/register">Register</NavLink>
        </p>
      </div>

    </section>
  </>
);

export default SplashScreen;
