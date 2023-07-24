import React, { useState ,useEffect} from 'react';
import './signup.css'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
const SignUp = () => {
    const [error,setError]=useState('')
    const navigation=useNavigate()
    const [data,setData]=useState([])
    const baseUrl='http://65.2.51.31:9001'
    const [formData, setFormData] = useState({
    username:'',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phoneNumber:''
  });
  
  const jwtToken=Cookies.get('jwtToken')
    console.log(jwtToken)
  
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    const{username,firstName,lastName,email,password,phoneNumber}=formData
     const options={username,email,first_name:firstName,last_name:lastName,phone_number:phoneNumber,password}
    
        const response = await axios.post(`${baseUrl}/register/`, options);
        console.log(response)
        if (response.request.status===200){
            setData({
                username:'',
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                phoneNumber:''
              })
            navigation('/Login')
        }else{
            setError(response.data.error.email[0])
        }
        
      

  };

  return (
    <div className="signup-container">
      <form onSubmit={handleSubmit}>
      <input
          type="text"
          name="username"
          placeholder="User Name"
          value={formData.username}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="phoneNumber"
          placeholder="Phone Number"
          value={formData.phoneNumber}
          onChange={handleChange}
          required
        />
        <button type="submit">Sign Up</button>
      </form>
      <h1>{error&& error}</h1>
      <a href='/login'>Login</a>
    </div>
  );
  
  
};

export default SignUp;