import './JobSearch.css'
import Header from './Header';
import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Link  } from 'react-router-dom';
import Searchjob from './Searchjob';
function JobSearch()
{
    let [inputvalue,setInputvalue] =useState('')
  let [datajob,setDataJob] = useState([])
  useEffect(() => {
    const fetchAllJobs = async () => {
        let datajob = await axios.get("/appliedjob");
    
        setDataJob(datajob.data)
       
        
    }
    
    fetchAllJobs()
   
}, [])
let filterData = datajob.filter((ele) => ele.jobtitle.toLowerCase() == inputvalue.toLowerCase()||ele.companyname.toLowerCase() == inputvalue.toLowerCase()
||ele.skillsrequired.toLowerCase() == inputvalue.toLowerCase())
   
return(
    <>
 
    <div className='alljobhead'>
    <Header></Header></div>
   {/* <div className='header'></div> */}
   


  
<div className='section5'>
<Searchjob setInputvalue={setInputvalue} ></Searchjob>
    {/* <input placeholder='search' value={filterval} onInput={(e)=>handleFilter(e)} type="text"  className='section5box'></input> */}
    {/* <button className='section5search'>Search</button> */}
</div>
   <div className='section6'> 

   </div>

   <div>
   {filterData.length ? filterData.map ((ele)=>{return(
    
    <div  className='section7boxrep'>
    
{ele.jobcode}-{ele.jobtitle}-{ele.companyname}<button className='apply7' >applied</button><br></br>
Skills Required-- {ele.skillsrequired}<span>  </span><br></br>
<img className='sevenimage' src='./location.png'></img>{ele.location}<span>    </span>${ele.salary}<span>    </span>Application Status:{ele.applicationstatus}
<p className='paraseven'>{ele.jobdescription}</p>
<p></p>


    </div>

)}):datajob.length && datajob.map ((ele)=>{return(
    
<div  className='section7box'>
<div className='boxcontent'>
<div className='boxcontenttext'>
{ele.jobcode}-{ele.jobtitle}-{ele.companyname}</div><button className='apply7' >applied</button><br></br>
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
export default JobSearch;