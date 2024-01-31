import React, { useState, useContext } from 'react';
import "./LoginAndRegister.css";
// import { AuthContext } from '../context/AuthContext';

const Login = (props) => {
      const [pass, setPass] = useState("");
      const [name, setName] = useState("");
      // const { login } = useContext(AuthContext)

      const handle = () => {
            <e className="preventDefaul"></e>
      }

      return (
            <>
                  <form className='login'>
                        <label>
                              <p>Username</p>
                              <input value={name} onChange={(e) => { setName(e.target.value) }} type="text" name="name" placeholder="Enter Username" />
                        </label>
                        {/* <label>
                              <p>Password</p>
                              <input value={pass} onClick={login} onChange={(e) => { setPass(e.target.value) }} type="password" name="password" placeholder="*********" />
                        </label>  */}
                        <label>
                              <p>Password</p>
                              <input value={pass}  onChange={(e) => { setPass(e.target.value) }} type="password" name="password" placeholder="*********" />
                        </label>
                        {/* <input type="submit" value="Log In" /> */}
                        <button className='have' type='submit'>Log In</button>
                  </form>
                  <button onClick={() => props.switchView('Register')} className='next'>Dont Have An Account? Register</button>
            </>
      );
}
// 
export default Login;
