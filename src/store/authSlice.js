import { createSlice } from "@reduxjs/toolkit";


const getTokenFromLocalStorage = ()=>{
    return localStorage.getItem('token') || null;
}

const token = getTokenFromLocalStorage();


const initialState = {
    token : token,
    isAuthenticated : !!token,
    error : null
}

const authSlice = createSlice({
     name: 'auth',
     initialState: initialState,
     reducers:{
        setCredentials(state,action){
            state.token = action.payload.token;
            state.isAuthenticated = true;
            state.error = null;
            localStorage.setItem('token',action.payload.token);
        },
        setError(state,action){
            state.error = action.payload;
        },
        logout(state){
            state.token = null;
            state.error=null;
            localStorage.removeItem('token');

        }
     }
})


  export const { setCredentials, setError, logout } = authSlice.actions;
  export default authSlice.reducer;