import React, { useState, useEffect } from 'react';
import axios from "axios";
import './AllJobs.css'
import Header from './Header';
import { Link  } from 'react-router-dom';
import Searchjob from './Searchjob';
function Shortlisted()
{
    let [inputvalue,setInputvalue] =useState('')
  let [datajob,setDataJob] = useState([])
  useEffect(() => {
    const fetchAllJobs = async () => {
        let datajob = await axios.get(`/shortlisted/`);
        console.log(datajob.stringify());
        setDataJob(datajob.data)
       
        
    }
    
    fetchAllJobs()
   
}, [])

   
return(
    <>
 
    <div className='alljobhead'>
    <Header></Header></div>
   <div>
   <table border="1px" className='tablestyle' width="100%">
   <tr>
        <th><h1>STATUS </h1></th>
    </tr>     
            {datajob.length && datajob.map ((ele)=> (<div>
                <tr >
         <th>{ele.jobtitle}</th>
         <th>{ele.jobcode}</th>
         <th >{ele.posteddate}</th>
         <th>{ele.applieddate}</th>
         <th>{ele.candidateapplicationstatus}</th>
     </tr>
<div></div>

</div>

            ))}
    </table>
    </div>  
   </>

)
}
export default Shortlisted;