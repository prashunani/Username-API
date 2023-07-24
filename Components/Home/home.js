import React from 'react';
import { useState,useEffect } from 'react';
import axios from 'axios';
import LogOut from '../Button';
import { useNavigate,useHi } from 'react-router-dom';
import './home.css'
import Cookies from 'js-cookie';
const Home = () => {
    const [data,setData]=useState([])
    const [error,setError]=useState('')
    const baseUrl='http://65.2.51.31:9001'
    const [id,setId]=useState('')
    const navigation=useNavigate()
    const jwtToken=Cookies.get('jwtToken')
    const getTheData=async()=>{
        try {
            const token=Cookies.get('jwtToken')
            const headers= {
                Authorization:`Token ${token}`,
            }      
            const response = await axios.get(`${baseUrl}/retrive_update_user/`,{headers});
            if (response.status===200){
            setData(response.data)

            }else{
                setError(response.data.message)
            }
        } catch (error) {
            setError(error.message);
          }
     }


    useEffect(()=>{
        if (jwtToken===undefined){
            
            navigation('/login')
        }else{
             getTheData()
            
        }
        
    },[])

    const submitForm=(e)=>{
        e.preventDefault()
        navigation(`/${id}`)
    }

if (jwtToken!==undefined){
  return (
    <main>
    <form onSubmit={submitForm}> 
        <input onChange={(e)=>setId(e.target.value)} type='text' value={id} placeholder='Search Id Here'/>
        <button type='submit'>Search</button>
    </form>
    
    <table className="table-container">
      <thead>
        <tr>

          <th>Username</th>
          <th>Email</th>
          <th>PhoneNumber</th>
        </tr>
      </thead>
      <tbody>
        {data.map((person) => (
          <tr key={person.id}>
            <td>{person.first_name} {person.last_name}</td>
            <td>{person.email}</td>
            <td>{person.phone_number}</td>
          </tr>
        ))}
      </tbody>
    </table>
    <LogOut/>
    </main>
  )
        }
  ;
};

export default Home;