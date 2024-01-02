import React, { useState,useEffect } from 'react'
import homeicon from './img/home-icon.png';
//import refreshicon from './img/refresh-icon.png';
//import previcon from './img/prev-icon.png';
//import nexticon from './img/next-icon.png';
import { FaChevronLeft,FaChevronRight } from 'react-icons/fa';
import texticon2 from './img/Inputs-12-2.png';
import input3 from './img/Inputs-12-3.png';
import input4 from './img/Inputs-12-4.png';
import {  Link } from "react-router-dom";
import DragDropFiles from './DragDropFiles';
import DragDropImage from './DragDropImage';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Button2 = () => {
  const [input, setInput] = useState({ section5: '' });
  const { productId } = useParams();

  useEffect(() => {
    // Call the function when the component mounts
    handleGetProductDetails();
  }, []);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setInput((previousState) => {
      return { ...previousState, [name]: value };
    });
  };



const handleGetProductDetails = () => {
  // Make the API call to get product details
  const apiUrl = `/dev/product/${productId}`;

  axios
    .get(apiUrl)
    .then((response) => {
      // Assuming response.data contains the product details
      const productDetails = response.data;
      console.log(productDetails);
      // Assuming productDetails.feedback contains the feedback data
      setInput((previousState) => {
        return {
          ...previousState,
          section5: productDetails && productDetails.length > 0 ? productDetails[0].feedback : '',
        };
      });
    })
    .catch((error) => {
      console.error('Error fetching product details:', error);
      // Optionally, you can handle errors or show error messages
    });
};

const handlePatchFeedback = () => {
  const apiUrl = `/dev/product/${productId}`;

  const feedbackData = {
    feedback: input.section5, // Assuming input is the state that contains your form data
  };

  axios
    .patch(apiUrl, feedbackData)
    .then((response) => {
      console.log('Feedback patched successfully:', response.data);
      // Optionally, you can perform additional actions after successful patching
    })
    .catch((error) => {
      console.error('Error patching feedback:', error);
      // Optionally, you can handle errors or show error messages
    });
};

// Assuming there's a button triggering the PATCH request
const handlePatchButtonClick = () => {
  handlePatchFeedback();
};


  return (
    <div>
      <div className="container-fluid">
     <div className="row">
 
   <main className="col-md-12 px-md-4 main-content">
      <div className='p-3'>
       <div className='d-flex justify-content-between align-items-center'>
       <h4 className='mb-0 fw-bold'>Button 2</h4>
       <div className=''>
       <Link to='/'><img src={homeicon} className='img-fluid' alt='homeicon'/></Link>
        {/*<Link to='/link1'><img src={refreshicon} className='img-fluid' alt='refreshicon'/></Link>*/}
        <Link to='/' className='me-2 arrow'><FaChevronLeft /></Link>
        <Link to='/' className='arrow'><FaChevronRight /></Link>
       </div>
       </div>
      </div>
      
       <div className='row'>
         <div className='col-lg-4 col-md-4'>
           <div className='mt-4'> 
           <div className='cardicon-5'>
                  <img src={texticon2} className='img-fluid' alt='texticon' />
                    </div>
           <div className="card my-card-5">
           <div className="card-header">
                  <h4 className='mb-0'>Section 5</h4>                 
                </div>                
                <div className="card-body">                 
                 <textarea className="my-input text-wrap w-100 form-control" rows="10" cols="41" type="text" name="section5" onChange={handleChange} value={input.section5}></textarea>
                 </div>                
              </div>
           </div>
           <div className='text-end mt-4'>
           <button className='my-btn5' onClick={handlePatchButtonClick}>Button5</button>
           </div>
         </div>
         <div className='col-lg-4 col-md-4'>
           <div className='mt-4'> 
           <div className='cardicon-6'>
                  <img src={input3} className='img-fluid' alt='texticon' />
                    </div>
           <div className="card my-card-6"> 
           <div className="card-header">
                  <h4 className='mb-0'>Section 6</h4>
                  
                </div>               
                <div className="card-body">  
                <DragDropFiles/>         
                  </div>
                
              </div>
           </div>
         </div>
         <div className='col-lg-4 col-md-4'>
           <div className='mt-4 mb-4'>
           <div className='cardicon-7'>
                  <img src={input4} className='img-fluid' alt='texticon' />
                    </div> 
           <div className="card my-card-7">
           <div className="card-header">
                  <h4 className='mb-0'>Section 7</h4>
                 
                </div>                
                <div className="card-body">                 
                <DragDropImage/>  
                </div>
                
              </div>
           </div>
           <div className='text-end mt-4'>
         
         <Link to="/button6"><button className='my-btn3'>Button6</button></Link>
         </div>
         </div>
        
       </div>
       
       
     
     </main>
     </div>
     </div>
    </div>
  )
}

export default Button2