import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { validateEmail } from '../Utils/helper';
import PasswordInput from '../Components/Input/PasswordInput';
import axiosInstance from '../Utils/axiosInstance';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false); // Loading state

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (!password) {
      setError("Please enter the password.");
      return;
    }
    
    setError("");

    //LOGIN API CALL
    setLoading(true); // Start loading

    try {

      const response = await axiosInstance.post("/login", {
        email: email,
        password: password,
      });
      
      // Handle successful login response
      if (response.data && response.data.accessToken) {
        localStorage.setItem("token", response.data.accessToken);
        navigate('/dashboard');
      }
      
    } catch (error) {
      // Handle error
      if (error.response && error.response.data && error.response.data.message) {
        setError(error.response.data.message);
      } else {
        setError("An unexpected error occurred. Please try again.");
      }
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <>
      <div className='flex items-center justify-center mt-28'>
        <div className='w-96 border rounded bg-white px-7 py-10'>
          <form onSubmit={handleLogin}>
            <h4 className='text-2xl mb-7'>Login</h4>
            <input 
              type='email' 
              placeholder='Email' 
              className='input-box'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            
            <PasswordInput
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {error && <p className='text-red-500 text-xs pb-1'>{error}</p>}

            <button 
              type='submit' 
              className='btn-primary' 
              disabled={loading} // Disable button when loading
            >
              {loading ? 'Logging in...' : 'Login'} {/* Change button text based on loading state */}
            </button>
            <p>Not registered yet? {""} 
              <Link to="/signUp" className='font-medium text-primary underline'>
                Create an Account
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;