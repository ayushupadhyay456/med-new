import React from 'react'
import './Dashboard.css'
import Cardio from '../photos/cardiogram.png'
import Medeqip from '../photos/medical-equipment.png'
import monitor from '../photos/monitoring.png'
import mri from '../photos/mri.png'
const Dashboard = () => {
  return (
    <div>
    <div className='d-nav'>
        <div className="d-items">Home</div>
        <div className="d-items">Services</div>
        <div className="d-items">About US</div>
        <div className="d-items">Contact Us</div>
    </div>
    <div className="d-content">
        <div className="d-left">
            <div className="d-left-info">We care.About You</div>
            <p className='d-left-info'>Good health is the state of mental, physical and social well being
and it does not just mean absence of diseases.</p>
        </div>
        <div className="d-right">
            <img className='d-right-image' src="https://img.freepik.com/free-photo/beautiful-young-female-doctor-looking-camera-office_1301-7807.jpg?w=2000"/>
        </div>
    </div>
    <div className="d-serv-head">
    <div className="d-services-heading">Our Services.<span className='d-services-heading-text'>We are dedicated to serve best medical services</span></div>
    </div>
    
    
    <div className="d-services">
    
            <div className="d-services-cards">
            <div className="d-services-card-image">
                <img className='d-services-card-image1' src={Cardio}/>
                <h1>Hello</h1>
              </div>
            </div>
            <div className="d-services-cards">
              <div className="d-services-card-image">
                <img className='d-services-card-image1' src={Medeqip}/>
              </div>
            </div>
            <div className="d-services-cards">
            <div className="d-services-card-image">
                <img className='d-services-card-image1' src={monitor}/>
                <h1>Hello</h1>
              </div>
            </div>
            <div className="d-services-cards">
            <div className="d-services-card-image">
                <img className='d-services-card-image1' src={mri}/>
              </div>
            </div>

       
    </div>
    <div className="d-serv-head">
    <div className="d-services-heading">Subscribe to Our Newsletter</div>
    </div>
    <div className="d-news">
    
      <div className="d-news-info">
        <div className="d-news-infobox">

        </div>
      </div>
    </div>
    </div>
  )
}

export default Dashboard