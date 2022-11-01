import React from 'react'
import './RegisDoc.css'
const RegisDoc = () => {
  return (
    <div className='container'>
    <form>
      <h1 align="center">Hello Doctor</h1>
  <div className="form-group">
    <label for="exampleInputEmail1">Enter Name</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Name"/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your details with anyone.</small>
  </div>
  <div className="form-group">
    <label for="exampleage">Enter Phone Number</label>
    <input type="text" className="form-control" id="exampleage" aria-describedby="emailHelp" placeholder="Enter Phone Number"/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your Phone Number with anyone else.</small>
  </div>
  <div className="form-group">
    <label for="exampleage">Enter Email</label>
    <input type="email" className="form-control" id="exampleage" aria-describedby="emailHelp" placeholder="Enter Email"/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label for="exampleage">Enter Specialization</label>
    <input type="text" className="form-control" id="exampleage" aria-describedby="emailHelp" placeholder="Enter Specialization"/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Enter Wallet Address</label>
    <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Enter Wallet Address"/>
  </div>
  <div className="form-group form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
  <p align="center">By signing to this webiste,you consent us to process and store this information in our datatbase.</p>
</form>
    </div>
  )
}

export default RegisDoc
