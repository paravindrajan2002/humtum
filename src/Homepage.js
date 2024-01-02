import React from 'react'
import homeicon from './img/home-icon.png';
import refreshicon from './img/refresh-icon.png';
import previcon from './img/prev-icon.png';
import nexticon from './img/next-icon.png';
import bannerimg from './img/banner-img.png';
import icon1 from './img/Inputs-06.png';
import icon2 from './img/Inputs-07.png';
import icon3 from './img/Inputs-08.png';
import icon4 from './img/Inputs-09.png';
import Leftsidebar from "./Leftsidebar";
import {  Link } from "react-router-dom";

const Homepage = () => {
  
  return (
    <div>
      
     <div className="container-fluid">
      <div className="row">
        <Leftsidebar/>
    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 main-content">
       <div className='bg-light p-3'>
        <div className='d-flex justify-content-between align-items-center'>
        <h4 className='mb-0 fw-bold'>Dashborad</h4>
        <div className=''>
         <Link href='/'><img src={homeicon} className='img-fluid' alt='homeicon'/></Link>
         <Link href='/'><img src={refreshicon} className='img-fluid' alt='refreshicon'/></Link>
         <Link href='/'><img src={previcon} className='img-fluid' alt='previcon'/></Link>
         <Link href='/'><img src={nexticon} className='img-fluid' alt='nexticon'/></Link>
        </div>
        </div>
       </div>
       <div className='banner-sec mt-4'>
          <div className='row align-items-center'>
            <div className='col-lg-6 ps-5'>
              <p className='fw-bold text-light mb-2'>November 20,2023</p>
              <h4 className='fw-bold text-light mb-4'>Welcome Back, Lorem ipsum </h4>
              <p className='text-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi quo, doloremque odit modi nihil cumque necessitatibus sequi, similique, repellat dignissimos facilis! Architecto quos nemo quam, nisi natus accusantium culpa commodi.</p>
            </div>
            <div className='col-lg-6'>
            <img src={bannerimg} className='img-fluid' alt='bannerimg'/>
            </div>
          </div>      
        </div>
        <div className='row align-items-center '>
            <div className='col-lg-6 mt-4'>
                <div className='bg-white box-1 px-3 py-3 rounded'>
                <div className='d-flex '>                
                   <img src={icon1} className='img-fluid' alt='bannerimg'/>                 
                   <div className='ms-3 flex-grow-1'>
                    <p className='fw-bold text-secondary mb-2'>Lorem ipsum dolor sit amet consectetur</p>
                    <div className='d-md-flex justify-content-between'>
                    <h4 className='fw-bold text-dark'>15,000</h4>
                    <div className='text-end '>
                      <p className='mb-0'><span style={{color: "#845adf"}}>+40%</span><br/>this month</p>
                    </div>
                    </div>
                   </div>
                </div>
                </div>
            </div>
            <div className='col-lg-6 mt-4'>
                <div className='bg-white box-1 px-3 py-3 rounded'>
                <div className='d-flex '>                
                   <img src={icon2} className='img-fluid' alt='bannerimg'/>                 
                   <div className='ms-3 flex-grow-1'>
                    <p className='fw-bold text-secondary mb-2'>Lorem ipsum dolor sit amet consectetur</p>
                    <div className='d-md-flex justify-content-between'>
                    <h4 className='fw-bold text-dark'>15,000</h4>
                    <div className='text-end '>
                      <p className='mb-0'><span style={{color: "#23b7e5"}}>+40%</span><br/>this month</p>
                    </div>
                    </div>
                   </div>
                </div>
                </div>
            </div>
            <div className='col-lg-6 mt-4'>
                <div className='bg-white box-1 px-3 py-3 rounded'>
                <div className='d-flex '>                
                   <img src={icon3} className='img-fluid' alt='bannerimg'/>                 
                   <div className='ms-3 flex-grow-1'>
                    <p className='fw-bold text-secondary mb-2'>Lorem ipsum dolor sit amet consectetur</p>
                    <div className='d-md-flex justify-content-between'>
                    <h4 className='fw-bold text-dark'>15,000</h4>
                    <div className='text-end '>
                      <p className='mb-0'><span style={{color: "#12cd94"}}>+40%</span><br/>this month</p>
                    </div>
                    </div>
                   </div>
                </div>
                </div>
            </div>
            <div className='col-lg-6 mt-4'>
                <div className='bg-white box-1 px-3 py-3 rounded'>
                <div className='d-flex '>                
                   <img src={icon4} className='img-fluid' alt='bannerimg'/>                 
                   <div className='ms-3 flex-grow-1'>
                    <p className='fw-bold text-secondary mb-2'>Lorem ipsum dolor sit amet consectetur</p>
                    <div className='d-md-flex justify-content-between'>
                    <h4 className='fw-bold text-dark'>15,000</h4>
                    <div className='text-end '>
                      <p className='mb-0'><span style={{color: "#f5b849"}}>+40%</span><br/>this month</p>
                    </div>
                    </div>
                   </div>
                </div>
                </div>
            </div>
        </div>    
      
      </main>
   
      </div>
      </div>
    </div>
  )
}

export default Homepage