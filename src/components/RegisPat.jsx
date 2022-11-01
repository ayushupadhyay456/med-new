import React from 'react'
import './RegisPat.css'
const RegisPat = () => {
  return (
    <div className='container'>
    <form>
      <h1 align="center">Hello Patient</h1>
  <div className="form-group">
    <label for="exampleInputEmail1">Enter Wallet address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Email"/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label for="exampleage">Enter Age</label>
    <input type="text" className="form-control" id="exampleage" aria-describedby="emailHelp" placeholder="Enter age"/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label for="exampleage">Enter Gender</label>
    <input type="text" className="form-control" id="exampleage" aria-describedby="emailHelp" placeholder="Enter Gender"/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label for="exampleage">Enter Blood Type</label>
    <input type="text" className="form-control" id="exampleage" aria-describedby="emailHelp" placeholder="Enter Gender"/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
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

export default RegisPat