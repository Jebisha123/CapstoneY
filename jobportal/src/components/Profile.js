import React, { useState, useEffect } from 'react';
import axios from "axios";
import './Lnew.css'
// import { MultiSelectComponent  } from '@syncfusion/ej2-react-dropdowns'
import Multiselect from 'multiselect-react-dropdown';
import Header from './Header';
function Profile()

{
    let [data,setData] = useState({})
    let [skillsdata, setSkill] = useState([]);
   
    const handlechange=(e)=>{
        setData({
            ...data,[e.target.name]:e.target.value
        })
    }
    async function sendData()
    {
        let res = await axios.post("/candidateprofile",data)
        console.log(res.data)
        
        
    }
    useEffect(() => {
        const fetchSkill = async () => {
            let skillsdata = await axios.get("/skilltable");
            console.log(skillsdata.data);
            setSkill(skillsdata.data)

    
        }
        
        fetchSkill()
    }, [])
   
    return(
        <div>
            
         <div className='alljobhead'>
            
        <Header></Header></div>
        <div className='candidatealign'>
        <div>
<label className='labels' for="firstname"><b>firstname:  </b></label>
<input className='input' type="text" name="firstname" placeholder='firstname' onChange={handlechange}/>
<br></br>
<br></br>
</div>
<div>
<label className='labels' for="lastname"><b>lastname:  </b></label>
<input className='input' type="text" name="lastname" placeholder='lastname' onChange={handlechange}/>
<br></br>
<br></br>
</div>
<div>
<label className='labels' for="email"><b>email:  </b></label>
<input className='input' type="text" name="email" placeholder='email' onChange={handlechange}/>
<br></br>
<br></br>
</div>
<div>
<label className='labels' for="contact"><b>Password:  </b></label>
<input className='input' type="text" name="contact" placeholder='contact' onChange={handlechange}/>
<br></br>
<br></br>
</div>
<div>
<label className='labels' for="address"><b>address:  </b></label>
<input className='input' type="text" name="address" placeholder='address' onChange={handlechange}/>
<br></br>
<br></br>
</div>
<div>
<label className='labels' for="about"><b>about:  </b></label>
<input className='input' type="text" name="about" placeholder='about' onChange={handlechange}/>
<br></br>
<br></br>
</div>
<div>
<label className='labels' for="Profilepic"><b>ProfilePic:  </b></label>
<input className='input' type="text" name="ProfilePic" placeholder='ProfilePic' onChange={handlechange}/>
<br></br>
<br></br>
</div>
<div>
<label className='labels' for="currentcompany"><b>currentcompany:  </b></label>
<input className='input' type="text" name="currentcompany" placeholder='currentcompany' onChange={handlechange}/>
<br></br>
<br></br>
</div>
<div>
<label className='labels' for="ctc"><b>ctc:  </b></label>
<input className='input' type="text" name="ctc" placeholder='ctc' onChange={handlechange}/>
<br></br>
<br></br>
</div>
<div>
<label className='labels' for="experience"><b>experience:  </b></label>
<input className='input' type="text" name="experience" placeholder='experience' onChange={handlechange}/>
<br></br>
<br></br>
</div>
<div>
<label className='labels' for="currentrole"><b>currentrole:  </b></label>
<input className='input' type="text" name="currentrole" placeholder='currentrole' onChange={handlechange}/>
<br></br>
<br></br>
</div>
<div>
<label className='labels'>skill:<span>  </span></label><select className='input' name='skill'>
 {skillsdata.length && skillsdata.map ((ele)=>{return(<option>{ele.skillname}</option>)})}</select><input type="text" placeholder='skills' className='input' name='skills' onChange={handlechange} />
 <br></br><br></br> 
</div>
<div>
<label className='labels' for="resumelink"><b>resumelink:  </b></label>
<input className='input' type="text" name="resumelink" placeholder='resumelink' onChange={handlechange}/>
<br></br>
<br></br>
</div>
<div>
<label className='labels' for="expectedsalary"><b>expectedsalary:  </b></label>
<input className='input' type="text" name="expectedsalary" placeholder='expectedsalary' onChange={handlechange}/>
<br></br>
<br></br>
</div>
<div>
<label className='labels' for="preferredlocation"><b>preferredlocation:  </b></label>
<input className='input' type="text" name="preferredlocation" placeholder='preferredlocation' onChange={handlechange}/>
<br></br>
<br></br>
</div>
<div>
<input className='btnr' type="submit" onClick={sendData}/>
</div>

            
         
            {/* <label className='labels'>firstname:<span></span><input type="text" placeholder='firstname' name='firstname' onChange={handlechange}  /></label><br></br><br></br>
        <label>lastname:<span>   </span><input type="text" placeholder='lastname' name='lastname' onChange={handlechange}  /></label><br></br><br></br>
        <label>email:<span>   </span><input type="text" placeholder='email' name='email' onChange={handlechange}  /></label><br></br><br></br>
        <label>contact:<span>   </span><input type="text" placeholder='contact' name='contact' onChange={handlechange}  /></label><br></br><br></br>
        <label>address:<span>   </span><input type="text" placeholder='address' name='address' onChange={handlechange}  /></label><br></br><br></br>
        <label>about:<span>   </span><input type="text" placeholder='about' name='about' onChange={handlechange}  /></label><br></br><br></br>
        <label>profilepic:<span>   </span><input type="text" placeholder='profilepic' name='profilepic' onChange={handlechange}  /></label><br></br><br></br>
        <label>currentcompany:<span>   </span><input type="text" placeholder='currentcompany' name='currentcompany' onChange={handlechange}  /></label><br></br><br></br>
        <label>ctc:<span>   </span><input type="text" placeholder='ctc' name='ctc' onChange={handlechange}  /></label><br></br><br></br>
        <label>experience:<span>   </span><input type="text" placeholder='experience' name='experience' onChange={handlechange}  /></label><br></br><br></br>
        <label>currentrole:<span>   </span><input type="text" placeholder='currentrole' name='currentrole' onChange={handlechange}  /></label><br></br><br></br>
 
    
       
 <label>skill:<span>  </span></label><select name='skill'>
 {skillsdata.length && skillsdata.map ((ele)=>{return(<option>{ele.skillname}</option>)})}</select><input type="text" placeholder='skills' name='skills' onChange={handlechange} />
 <br></br><br></br>
       
        <label>resumelink:<span>   </span><input type="text" placeholder='resumelink' name='resumelink' onChange={handlechange} /></label><br></br><br></br>
        <label>expectedsalary:<span>   </span><input type="text" placeholder='expectedsalary' name='expectedsalary' onChange={handlechange} /></label><br></br><br></br>
        <label>preferredlocation:<span>   </span><input type="text" placeholder='preferredlocation' name='preferredlocation' onChange={handlechange} /></label><br></br><br></br>
    <input type="submit" onClick={sendData} />*/}
            
            </div> 
       
        </div>

    )
}
export default Profile;