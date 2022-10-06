import React from 'react'
import './RegisPat.css'
const RegisDoc = () => {
  return (
    <div className='container'>
        <div className="app-wrapper">
            <h2>Hello Patient</h2>
            <form>
            <div class="mb-3">
    <label for="examplename" class="form-label">Name</label>
    <input type="text" class="form-control" id="examplename" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">Enter Your Full name.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Date of Birth</label>
    <input type="date" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1"/>
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
            <p className='para-2'>By Clicking on the Submit button,you agree to our terms and conditions</p>
        </div>
    </div>
  )
}

export default RegisDoc