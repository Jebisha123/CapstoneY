import React, { useState, useEffect } from 'react';
import axios from "axios";
import './AllJobs.css'
import Header from './Header';
import { Link  } from 'react-router-dom';
import Searchjob from './Searchjob';
function AllJobs()
{ 
let [inputvalue,setInputvalue] =useState('')

let [countval,setcountval] =useState('')
let btni = document.querySelector(".btnid")

  async function sendData(data)
  {
      let res = await axios.post("/candidateapplication",data)
      console.log(res.data)
      alert("Applied")
 
  
     
  }


  let [datajob,setDataJob] = useState([])
  useEffect(() => {
    const fetchAllJobs = async () => {
        let datajob = await axios.get("/jobdetail");
        console.log(datajob.data);
        setDataJob(datajob.data)
let countapp = await axios.get(`/application/${"applied"}`)
console.log(countapp.data)

    }
    
    fetchAllJobs()
}, [])
 
console.log(inputvalue)
 
let filterData = datajob.filter((ele) => ele.jobtitle.toLowerCase() == inputvalue.toLowerCase()||ele.companyname.toLowerCase() == inputvalue.toLowerCase()
||ele.skillsrequired.toLowerCase() == inputvalue.toLowerCase())
  
    return(
        <>
     
        <div className='alljobhead'>
        <Header></Header></div>
       <div className='section1'><h5>snapshot</h5></div>
       <div className='section2'>
        <div className='frame2'>
        <div className='frameone1'>
            <div className='frameimg' ><img className='frameimg' src="./jobstart.png"/></div>
            <div className='frametext'>All Jobs</div>
            <div className='frametext'></div>
            <div></div>
        </div>
<div className='frameone1'><div className='frameimg' ><img className='frameimg' src="./jobstart.png"/></div>
            <div className='frametext'>Eligible Jobs</div>
            <div className='frametext'></div></div>
<div className='frameone1'><div className='frameimg' ><img className='frameimg' src="./appliedjob.png"/></div>
<Link to={`/jobSearch`}><div className='frametext'>Applied Jobs</div></Link>
            <div className='frametext'></div></div>
<div className='frameone11'></div>
        </div>
       </div>
       <div className='section1'><h5>Shortlisted</h5></div>
       <div className='section4'>
       <div className='frame2'>
        <div className='frameone1'><div className='frameimg' ><img className='frameimg' src="./shortlisted.png"/></div>
        <Link to={`/Shortlisted`}><div className='frametext'>Shortlisted </div></Link>
            <div className='frametext'></div></div>
<div className='frameone1'><div className='frameimg' ><img className='frameimg' src="./interviewing.png"/></div>
<Link to={`/Interviewing`}> <div className='frametext'>Interviewing </div></Link>
            <div className='frametext'></div></div>
<div className='frameone1'><div className='frameimg' ><img className='frameimg' src="./reject.png"/></div>
<Link to={`/Rejected`}><div className='frametext'>Rejected </div></Link>
            <div className='frametext'></div></div>
<div className='frameone1'><div className='frameimg' ><img className='frameimg' src="./offer.png"/></div>
<Link to={`/Offered`}>  <div className='frametext'>Offer Received </div></Link>
            <div className='frametext'></div></div>
</div>
       </div>
       <div className='section1'><h5>All Jobs</h5></div>
    <div className='section5'>
    <Searchjob setInputvalue={setInputvalue} ></Searchjob>
      
    </div>
       <div className='section6'> 
   
       </div>

       <div>
       {filterData.length ? filterData.map ((ele)=>{return(
        
        <div  className='section7boxrep'>
        
{ele.jobcode}-{ele.jobtitle}-{ele.companyname}<button className='apply7' onClick={()=>sendData(ele)}>apply</button><br></br>
Skills Required-- {ele.skillsrequired}<span>  </span><br></br>
<img className='sevenimage' src='./location.png'></img>{ele.location}<span>    </span>${ele.salary}<span>    </span>Application Status:{ele.applicationstatus}
<p className='paraseven'>{ele.jobdescription}</p>
<p></p>


        </div>

)}):datajob.length && datajob.map ((ele)=>{return(
        
  <div  className='section7box'>
  <div className='boxcontent'>
    <div className='boxcontenttext'>
{ele.jobcode}-{ele.jobtitle}-{ele.companyname}</div><button className='apply7' onClick={()=>sendData(ele)}>apply</button><br></br>
Skills Required-- {ele.skillsrequired}<span>  </span><br></br>
<img className='sevenimage' src='./location.png'></img>{ele.location}<span>    </span>${ele.salary}<span>    </span>Application Status:{ele.applicationstatus}
<p className='paraseven'>{ele.jobdescription}</p>
<p></p>
</div>

  </div>

)})

}<br></br><br></br><br></br><br></br><br></br>

       </div><br></br><br></br>   
       </>
        

    )
}
export default AllJobs;