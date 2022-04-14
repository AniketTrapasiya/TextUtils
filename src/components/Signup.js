import React from 'react'
import './Signup.css'

export default function Signup() {
  return (
    <div className='container my-3'>
    <div className="dropdown-menu d-flex align-items-center p-3 rounded-3 shadow-lg"  id="dropdownMega">
    <form>
    <h1 className="h1 mb-6 fw-normal" style={{color: "#152c5b"}}>sign in</h1>

    <div className="form my-3">
     Email: <input type="email" className="form-control" id="floatingInput" 
 placeholder="name@example.com" />
    </div>
    <div className="form my-3">
     Password: <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
    </div>
    <button className="w-100 btn btn-lg btn-primary" style={{backgroundColor: 'blue'}} type="submit">Sign in</button>
  </form>
  </div>
  </div>
  )
}