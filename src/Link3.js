import React, { useState } from 'react'
import homeicon from './img/home-icon.png';
import refreshicon from './img/refresh-icon.png';
import previcon from './img/prev-icon.png';
import nexticon from './img/next-icon.png';
import {  Link } from "react-router-dom";
import texticon from './img/gallery.png';
import galleryicon from './img/gallery.png';
import Placeholderimg from './img/Placeholder-img.png';

const Link3 = () => {

    const [input,setInput] = useState({section11:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit, "});

    function handleChange(e){
       const name = e.target.name;
       const value = e.target.value;
    
       setInput((previousState) => {
        return{...previousState, [name]:value}
       })
    }

  return (
    <div>
      
     <div className="container-fluid">
      <div className="row">
      
      <main className="col-md-12 px-md-4 main-content">
       <div className='bg-light p-3'>
        <div className='d-flex justify-content-between align-items-center'>
        <h4 className='mb-0 fw-bold'>Link 1</h4>
        <div className=''>
        <Link to='/'><img src={homeicon} className='img-fluid' alt='homeicon'/></Link>
        <Link to='/link3'><img src={refreshicon} className='img-fluid' alt='refreshicon'/></Link>
        <Link to='/'><img src={previcon} className='img-fluid' alt='previcon'/></Link>
        <Link to='/'><img src={nexticon} className='img-fluid' alt='nexticon'/></Link>
        </div>
        </div>
       </div>

       <div className='row'>
         <div className='col-lg-7 col-md-7'>
           <div className='bg-light mt-4'> 
           <div className="card my-card-10 mb-4">                
                <div className="card-body">                 
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                </div>
                <div className="card-header">
                  <h4 className='mb-0'>Section 8</h4>
                  <img src={galleryicon} className='img-fluid' alt='texticon'/>
                </div>
              </div>
           </div>
           <div className="card my-card-11 mb-4"> 
                        
                <div className="card-body">
                    <p className='fw-bold'>Input1</p>                 
                    <textarea className="my-input text-wrap w-100 form-control" rows="5" cols="41" type="text" name="section3" onChange={handleChange} value={input.section11}></textarea>
      
                 </div>
               
              </div>
         </div>
         <div className='col-lg-5 col-md-5 '>
         <div className="accordion mt-4 my-card-12" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button d-flex justify-content-between align-items-center" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={{background: "#f6b849",padding: ' 6px 15px'}}>
                    <h4 className='mb-0'>Gallery</h4>
                    <img src={texticon} className='img-fluid' alt='texticon'/>
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                <img src={Placeholderimg} className='img-fluid' alt='Placeholderimg'/>
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed justify-content-center" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={{background: "#80cbf2"}}>
                <h4 className='mb-0'>Panel 2</h4>
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed justify-content-center" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={{background: "#a066cc"}}>
                <h4 className='mb-0 '>Panel 2</h4>
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
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

export default Link3