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
// import Navbar from './Navbar';
const Dashboard = () => {
  let navigate=useNavigate();
  return (
    <>
    
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
    </>
  )
}

export default Dashboard