import React, { useRef } from "react";
import { Link } from "react-router-dom";
import baseApi from "../axiosClient";
import { useStateContext } from "../contexts/ContextProvider";
const SignUp = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();

  const { setUser, setToken } = useStateContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      password_confirm: passwordConfirmRef.current.value,
    };

    baseApi
      .post("/signup", payload)
      .then((data) => {
        setUser(data.user);
        setToken(data.token);
      })
      .catch((error) => {
        const response = error.response;
        if (response && response.status === 442) {
          console.log(response.data.errors);
        }
      });
  };

  return (
    <div className="login-signup-form animated fadeInDown">
      <div className="form">
        <form onSubmit={handleSubmit}>
          <h1 className="title">Sign up</h1>
          <input type="text" ref={nameRef} placeholder="Full Name" />
          <input type="email" ref={emailRef} placeholder="Email" />
          <input type="password" ref={passwordRef} placeholder="Password" />
          <input
            type="password"
            ref={passwordConfirmRef}
            placeholder="Password Confirmation"
          />
          <button className="btn btn-block">Login</button>
          <p className="message">
            Already have account? <Link to="/login">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
