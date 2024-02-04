import React, { useState } from 'react';
import "./LoginAndRegister.css";
import Validation from "./LoginValidation.js"
import axios from 'axios';
// import { AuthContext } from '../context/AuthContext';

const Login = (props) => {
      // const [pass, setPass] = useState("");
      // const [name, setName] = useState("");
      // // const { login } = useContext(AuthContext)
      const [errors, seterrors] = useState({})
      const [values, setvalues] = useState({
            email: "",
            password: ""
      });
console.log("shiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii");
      const handleSubmit = (e) => {
            e.preventDefault(); // Correct the typo here
            seterrors(Validation(values));
            if (errors.email === "" && errors.password === "") {
                  axios.post(`http://localhost:8080/user/login`, values)
                        .then(res => {
                              if (res.data === "success") {
                                    props.switchView('Home')
                              } else {
                                    alert("Wrong Email or Password")
                              }
                        })
                        .catch(err => console.log(err))
            }
      }


      const handleInput = (e) => {
            setvalues(prev => ({ ...prev, [e.target.name]: e.target.value }));
      }


      return (
            <form className='login-and-signin-container' action='' onSubmit={handleSubmit}>
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
                  {/* <input type="submit" value="Log In" /> */}
                  <button type='submit' className='login-and-signin'  >Log In</button>
                  <button onClick={() => props.switchView('Register')} className='change-view-login'>Dont Have An Account? Sign In Here</button>
            </form>











            //  <>
            //       <form className='login'>
            //             <label>
            //                   <p>Username</p>
            //                   <input value={name} onChange={(e) => { setName(e.target.value) }} type="text" name="name" placeholder="Enter Username" />
            //             </label>
            //             {/* <label>
            //                   <p>Password</p>
            //                   <input value={pass} onClick={login} onChange={(e) => { setPass(e.target.value) }} type="password" name="password" placeholder="*********" />
            //             </label>  */}
            //             <label>
            //                   <p>Password</p>
            //                   <input value={pass}  onChange={(e) => { setPass(e.target.value) }} type="password" name="password" placeholder="*********" />
            //             </label>
            //             {/* <input type="submit" value="Log In" /> */}
            //             <button className='have'  >Log In</button>
            //       </form>
            //       <button onClick={() => props.switchView('Register')} className='next'>Dont Have An Account? Register</button>
            // </>
      );
}
// 
export default Login;