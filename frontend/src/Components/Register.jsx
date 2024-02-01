import React, { useState } from 'react';
import "./LoginAndRegister.css";

import Validation from "./SignInValidation.js"
import axios from "axios"
// import { AuthContext } from '../context/AuthContext';

const Register = (props) => {
      // const [pass, setPass] = useState("");
      // const [name, setName] = useState("");
      // // const { login } = useContext(AuthContext)
      const [errors, seterrors] = useState({})
      const [values, setvalues] = useState({
            username: "",
            email: "",
            password: ""
      });
      console.log("helllllllllllooooooooooooooooooooooooooooooooooooooooooo");

      const handleSubmit = (e) => {
            e.preventDefault(); // Correct the typo here
            seterrors(Validation(values));
            if (errors.username === "" && errors.email === "" && errors.password === "") {
                  axios.post(`http://localhost:8080/user/add`, values)
                        .then(res => { props.switchView('Login') })
                        .catch(err => console.log(err))
            }
      }


      const handleInput = (e) => {
            setvalues(prev => ({ ...prev, [e.target.name]: e.target.value }));
      }


      return (
            <form className='login' action='' onSubmit={handleSubmit}>
                  <label>
                        <p>Username</p>
                        <input onChange={handleInput} type="text" name="username" placeholder="Enter username" />
                        <span>{errors.username && <span>{errors.username}</span>}</span>
                  </label>
                  <label>
                        <p>Email</p>
                        <input onChange={handleInput} type="text" name="email" placeholder="Enter Email" />
                        <span>{errors.email && <span>{errors.email}</span>}</span>
                  </label>
                  <label>
                        <p>Password</p>
                        <input onChange={handleInput} type="password" name="password" placeholder="*********" />
                        <span>{errors.password && <span>{errors.password}</span>}</span>
                  </label>
                  <button type='submit' className='have'  >Sign In</button>
                  <button onClick={() => props.switchView('Login')} className='next'>Have An Account? Log In</button>
            </form>

      );
}

export default Register;
