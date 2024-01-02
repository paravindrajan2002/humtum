import React, { useState,useEffect } from 'react'
import homeicon from './img/home-icon.png';
//import refreshicon from './img/refresh-icon.png';
//import previcon from './img/prev-icon.png';
//import nexticon from './img/next-icon.png';
import { FaChevronLeft,FaChevronRight } from 'react-icons/fa';
import input5 from './img/Inputs-10-2.png';
import input6 from './img/Inputs-10-3.png';
import {  Link } from "react-router-dom";

const Button6 = () => {

    const [input,setInput] = useState({section10:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit, "});

    function handleChange(e){
       const name = e.target.name;
       const value = e.target.value;
    
       setInput((previousState) => {
        return{...previousState, [name]:value}
       })
    }

  

  const [section5Data, setSection5Data] = useState('data from section_5');
  const [fileNames, setFileNames] = useState(['filename of 1st file', 'filename of 2nd file']);
  const [imageNames, setImageNames] = useState(['filename of the 1st image', 'filename of the 2nd image']);
  const [section8_1Data, setSection8_1Data] = useState('');
  const [section8_2Data, setSection8_2Data] = useState('');
  const [section9Data, setSection9Data] = useState('');
 
  const fetchData = async () => {
    const url = '/dev/ask';

    const requestBody = {
      section_5: section5Data,
      files: fileNames,
      images: imageNames,
    };

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const responseData = await response.json();
      console.log('API response:', responseData);

      // Update state with data from the API response
      setSection8_1Data(responseData['section_8.1']);
      setSection8_2Data({
        image_url: responseData['section_8.2'].image_url,
        description: responseData['section_8.2'].description
      });
      
      console.log("section8_2Data: ", section8_2Data);

      // setSection8_2Data(responseData['section_8.2']);
     
      setSection9Data(responseData.section_9);
     
    } catch (error) {
      console.error('Error sending data to API:', error.message);
    }
  };

  useEffect(() => {    
    fetchData(); // Load data when the component mounts
  }, []);

    
  return (
    <div>
    <div className="container-fluid">
    <div className="row">

  <main className="col-md-12 px-md-4 main-content">
     <div className='p-3'>
      <div className='d-flex justify-content-between align-items-center'>
      <h4 className='mb-0 fw-bold'>Button 6</h4>
      <div className=''>
      <Link to='/'><img src={homeicon} className='img-fluid' alt='homeicon'/></Link>
        {/*<Link to='/link1'><img src={refreshicon} className='img-fluid' alt='refreshicon'/></Link>*/}
        <Link to='/' className='me-2 arrow'><FaChevronLeft /></Link>
        <Link to='/' className='arrow'><FaChevronRight /></Link>
      </div>
      </div>
     </div>
     
     <div className='row'>
         <div className='col-lg-6 col-md-6 mb-3'>
           <div className='mt-4'> 
           <div className='cardicon-8'>
                  <img src={input5} className='img-fluid' alt='texticon' />
                    </div>
           <div className="card my-card-8">
           <div className="card-header">
                  <h4 className='mb-0'>Section 8</h4>                 
                </div>                
                <div className="card-body" style={{background:'#d7b9ed'}}>                 
                <div className="card my-card-9 mb-3">                                   
                    <div className="card-body" >  
         
                   <p className="section8_1Data height-cls">{section8_1Data}</p>
      
                    </div>
                    <div className="card-header">
                        <h4 className='mb-0'>Section 8.1</h4>
                       
                    </div> 
                </div>
                <div className="card my-card-10 ">                                   
                    <div className="card-body" >                 
                        
                        <p className="card-text"><b>Image URL:</b> {section8_2Data.image_url}</p>
                        <p className="card-text"><b>Description:</b> {section8_2Data.description}</p>
                    </div>
                    <div className="card-header">
                        <h4 className='mb-0'>Section 8.2</h4>
                       
                    </div> 
                </div>
                </div>
                
              </div>
           </div>
         </div>

         <div className='col-lg-6 col-md-6'>
           <div className='mt-4'> 
           <div className='cardicon-11'>
                  <img src={input6} className='img-fluid' alt='texticon' />
                    </div>
           <div className="card my-card-11 mb-4"> 
           <div className="card-header">
                  <h4 className='mb-0'>Section 9</h4>
                  
                </div>               
                <div className="card-body">                 
                  <p className="card-text height-cls">{section9Data}</p>
                </div>
               
              </div>
           </div>
           <div className="card my-card-11-1 mb-4"> 
           <div className="card-header">
                  <h4 className='mb-0'>Input1</h4>                  
                </div>                         
                <div className="card-body">
                                     
                    <textarea className="my-input text-wrap w-100 form-control" rows="7" cols="41" type="text" name="section3" onChange={handleChange} value={input.section10}></textarea>
      
                 </div>
               
              </div>
              <div className='text-center'>
              <button className='my-btn3'>Button7</button>
              </div>
         </div>

        </div> 
      
      
    
    </main>
    </div>
    </div>
   </div>
  )
}

export default Button6