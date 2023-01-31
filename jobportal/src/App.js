import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import AllJobs from './components/AllJobs';
import JobSearch from './components/JobSearch';
import Landing from './components/Landing';
import Profile from './components/Profile';
import Register from './components/Register';
import Appliedjob from './components/Appliedjob';
import Shortlisted from './components/Shortlisted';
import Offered from './components/Offered';
import Interviewing from './components/Interviewing';
import Rejected from './components/Rejected';
import {
 
  Routes,
  Route,

} from "react-router-dom";



function App() { 
  return (
  <>
  <Routes>
    <Route path='/' element={<Login/>}></Route>
  <Route path='/AllJobs' element={<AllJobs/>}></Route>
  <Route path='/JobSearch' element={<JobSearch/>}></Route>
  <Route path='/Landing' element={<Landing/>}></Route>
  <Route path='/Profile' element={<Profile/>}></Route>
  <Route path='/Register' element={<Register/>}></Route>
  <Route path='/Appliedjob' element={<Appliedjob/>}></Route>
  <Route path='/Shortlisted' element={<Shortlisted/>}></Route>
  <Route path='/Offered' element={<Offered/>}></Route>
  <Route path='/Rejected' element={<Rejected/>}></Route>
  <Route path='/Interviewing' element={<Interviewing/>}></Route>
      

      </Routes>
      </>
  
  );
}

export default App;
