import React from 'react'
import './Dashboard.css'
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import tiny from '../photos/tiny.png'
import medicine from '../photos/medicine.gif'
import { faFileMedical } from '@fortawesome/free-solid-svg-icons';
import { faTruckMedical } from '@fortawesome/free-solid-svg-icons';
import { faFontAwesome } from '@fortawesome/free-regular-svg-icons';
import { faSuitcaseMedical } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
const Dashboard = () => {
  let navigate=useNavigate();
  return (
    <div>
      <ul className='d-nav'>
      <li>MED-3</li>
  <div className='li-wall'>
  <li className='active'><button className='btn btn-outline-primary'>Home</button></li>
  <li><button className='btn btn-outline-primary'>Services</button></li>
  
  <li>
  
  <button onClick={()=>{navigate('/About')}} className='btn btn-outline-primary'>MedBox</button>
    
    
    
    </li>
  <li><button onClick={()=>{navigate('/About')}} className='btn btn-outline-primary'>About</button></li>
  <li><button className="custom-btn btn-3"><span>Wallet</span></button></li>
  </div>
   </ul>
    <div className="d-content">
    
        <div className="d-left">
        <div className='d-left-head'>
          Hello
        </div>
        <div className="d-left-head1">
          Lead Generation.Online Business
        </div>
        <div className="btn btn-primary btn-lg">
          Get Started
        </div>
        </div>
        <div className="d-right">
<img src={tiny}/>
        </div>
    </div>
    <div className="d-services">
      <div className='d-services-head'>Our Services</div>
      <div className="d-boxes">
      <div className="d-box">
        <div className="d-med-box">
        <FontAwesomeIcon className='d-med-box-img' icon={faSuitcaseMedical} />
        <div className="d-med-head">Remain Anonymous</div>
        </div>
        <p>Your Medical Data can't be tracked to your identity</p>
      
      </div>
      <div className="d-box">
      <div className="d-med-box">
        <FontAwesomeIcon className='d-med-box-img' icon={faTruckMedical} />
        <div className="d-med-head">Decentralized <br></br>Platform</div>
        </div>
        <p>To aid in managing patient reports and provide seamless</p>
      </div>
      <div className="d-box">
      <div className="d-med-box">
        <FontAwesomeIcon className='d-med-box-img' icon={faFileMedical} />
        <div className="d-med-head">Appointments</div>
        </div>
        <p>Can be taken from doctors in just a click.</p>
      </div>
      </div>
      
    </div>
    </div>
  )
}

export default Dashboard