import { Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './pages/Login/Login';
import Dashboard from './pages/Dashboard/Dashboard';
import NotFound from './pages/NotFound/NotFound';
import ProtectedRoutes from './pages/ProtectedRoutes/ProtectedRoutes';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path='/' element={<ProtectedRoutes/>}>
           <Route index element={<Dashboard/>}/>
          
      </Route>
      <Route path="*" element={<NotFound />} />
      
    </Routes>
  );
}

export default App;
