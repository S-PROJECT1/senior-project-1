import React, { useState } from 'react';
import "./LoginAndRegister.css";
const Register = (props) => {
      const [email, setEmail] = useState("");
      const [pass, setPass] = useState("");
      const [name, setName] = useState("");

      return (
            <>
            <form className='login'>
                        <label>
                              <p>Username</p>
                              <input value={name} onChange={(e) => { setName(e.target.value) }} type="text" name="name" placeholder="Enter Username" />
                        </label>
                        <label>
                              <p>Email</p>
                              <input value={email} onChange={(e) => { setEmail(e.target.value) }} type="text" name="email" placeholder="Enter Email" />
                        </label>
                        <label>
                              <p>Password</p>
                              <input value={pass} onChange={(e) => { setPass(e.target.value) }} type="password" name="password" placeholder="*********" />
                        </label>
                        {/* <input type="submit" value="Log In" /> */}
                        <button type='submit'>Register</button>
                  </form>
                  <button onClick={() => props.switchView('Login')} className='next'>Already Have An Account? Log In</button>
                  </>
      )
}

export default Register