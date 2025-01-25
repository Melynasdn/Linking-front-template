import { useEffect, useState } from 'react';
import React from 'react';
import './Dashboard.css';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../store/authSlice';
import axios from 'axios';



const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const { token } = useSelector((state) => state.auth);
  const [errorMessage, setErrorMessage]=useState('');


const handleLogout = () =>{
  dispatch(logout());
  navigate('login');
}

useEffect(() => {
  const fetchUsers = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/users/all`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log('Fetched succesfull ', response.data);
      setUsers(response.data);
    } catch (error) {
      if(error.response.status === 401 || error.response.status === 403){
        dispatch(logout());
        navigate('login');
      }else{
        console.error('fetch failed', error); 
      }

    }
  };   
  if(token) fetchUsers();
  
}, [token]);



  return <div className='Dashboard-container'>
  <h1>Dashboard</h1>
  <button className='logout-button' onClick={handleLogout}>
    Logout
  </button>
  <div>
    <h2>Users</h2>
    {users.length ===0 ? <p>No users found</p> :
    
    <ul>
      {users.map(user => (
        <li key={user.username}> Username : {user.username} </li>
      ))}
    </ul>
    }
    
  </div>
</div>
};

export default Dashboard;
