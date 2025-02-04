import React from 'react'

const Home = () => {
  return (
    <div className='d-flex flex-column justify-content-center align-items-center vh-100'>
      <h1 className=''>To Do Application</h1>
      <div className='m-5'>
        <button className='btn btn-primary border-0 text-white py-2 px-5 rounded-3 mx-3'>Login</button>
        <button className='btn btn-success border-0 text-white py-2 px-5 rounded-3 mx-3'>Signup</button>
      </div>
      
      {/* <input type="email" name="email" id="signup" placeholder='Enter Email'/>
      <input type="email" name="email" id="login" placeholder='Enter Email'/> */}

    </div>
  )
}

export default Home
