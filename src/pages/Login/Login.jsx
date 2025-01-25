import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setCredentials } from '../../store/authSlice';
import axios from 'axios';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
     
    const handleSubmit = async(e)=>{
      e.preventDefault();
      try{
        const response = await axios.post('http://localhost:5000/api/users/login',
                                      {username : email,password});
                                      dispatch(setCredentials({ token: response.data.token }));
                                      console.log('Done',response.data);
                                      navigate('/');
      }catch(err){
        console.error('Login failed:',err);
      }
    }

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit"
        onClick={handleSubmit}
        >Login</button>
      </form>
      
    </div>
  );
};

export default Login;
