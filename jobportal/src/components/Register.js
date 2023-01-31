import React,{useState,useEffect} from 'react'
import axios from "axios";
import { Link  } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './Lnew.css'
import Header from './Header';
function Register()
{
    let [data,setData] = useState({})
    const navigate = useNavigate();
    const handlechange=(e)=>{
        setData({
            ...data,[e.target.name]:e.target.value
        })

    }
    async function sendData()
    {
        let res = await axios.post("/userdetail",data)
        console.log(res.data)
        
        navigate('/')
    }
    return(
        <div>
         <div className='alljobhead'>
        <h1 className='headinftext'>JOB PORTAL</h1></div>
        <div className='qbox'>
            <div className='label'>
                REGISTER
            </div>
            <div>
                <br></br>
                <br></br>
            <label className='label' for="UserName"><b>UserName:  </b></label>
<input className='input'  type="text" placeholder='UserName'/>

</div>
            <div>
                <br></br>
                <br></br>
            <label className='label' for="email"><b>Email:  </b></label>
<input className='input'  type="text" name="email" placeholder='email' onChange={handlechange}/>
<br></br>
<br></br>
</div>
<div>
<label className='label' for="Password"><b>Password:  </b></label>
<input className='input' type="text" name="password" placeholder='password' onChange={handlechange}/>
<br></br>
<br></br>
</div>
<div>
<input className='btn' type="submit" onClick={sendData}/>
</div>


</div>
        </div>
    )

}
export default Register;