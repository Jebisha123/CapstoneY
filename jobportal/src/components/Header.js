import React,{useState,useEffect} from 'react'
import './Login.css'
import { Link  } from 'react-router-dom';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
function Header()
{
    async function lout()
    {
        let res = await axios.get("/logout")
    
        
    
    }
    return(
        <div>
            <div className='heading'>
                <div><img className='heroimg' src='./herovired.png'></img></div>
<Link to={`/AllJobs`}><div>Dash Board</div></Link>
<Link to={`/Profile`}><div>Application Profile</div></Link>
<Link to={`/JobSearch`}><div>Applied Jobs</div></Link>
<div>Activity</div>
<Link to={`/`}><div onClick={lout}>Logout</div></Link>
        </div>
        </div>
    );
}
export default Header;