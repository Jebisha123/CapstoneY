import React,{useState,useEffect} from 'react'
import axios from "axios";
import { Link  } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './Login.css'
import Header from './Header';
function Searchjob({setInputvalue})
{
    function handlechange(e)
    {
setInputvalue(e.target.value)
    }
    return(
        
        <input className='searchbox' placeholder='search here' onChange={handlechange}></input>
    )
}
export default Searchjob;