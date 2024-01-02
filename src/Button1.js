import React, { useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import homeicon from './img/home-icon.png';
//import refreshicon from './img/refresh-icon.png';
//import previcon from './img/prev-icon.png';
//import nexticon from './img/next-icon.png';
import { FaChevronLeft,FaChevronRight } from 'react-icons/fa';
import texticon from './img/Inputs-10.png';
import texticoncolo1 from './img/Inputs-10-1.png';
import texticon1 from './img/Inputs-11-1.png';
import texticon2 from './img/Inputs-12.png';
import { Link } from "react-router-dom";
import axios from 'axios';

const Button1 = () => {
  const [input, setInput] = useState({
    section3: "",
    section4: ""
  });
  const { productId } = useParams();
  const [countdown, setCountdown] = useState(20);
  const [inputStarted, setInputStarted] = useState(false);
  const [section1Data, setSection1Data] = useState(null);
  const [section2Data, setSection2Data] = useState(null);
  const startCountdownRef = useRef();
  // const ws = useRef(null);
  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setInput((previousState) => {
      return { ...previousState, [name]: value }
    });
    if (!inputStarted) {
      setInputStarted(true);
      startCountdownRef.current();
    }
  }; 
  const handleChangeFeedback = (e) => {
    // Handle input change for section3
    const { name, value } = e.target;
    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  };

  startCountdownRef.current = () => {
    const countdownInterval = setInterval(() => {
      setCountdown((prevCountdown) => {
        if (prevCountdown > 0) {
          return prevCountdown - 1;
        }

        clearInterval(countdownInterval);

        // Invoke the WebSocket to obtain data for Section 1 and Section 2
        section1WebSocket();
        section2WebSocket();

        return 0;
      });
    }, 1000);
  };

  const handleButton3Click = () => {
    // Open a WebSocket connection
    const wsButton3 = new WebSocket('wss://2gvjb28rcl.execute-api.us-east-1.amazonaws.com/dev/');
  
    // Set up an event listener for when the WebSocket connection is open
    wsButton3.onopen = () => {
      // Send payload for Button3
      const payloadButton3 = JSON.stringify({ action: 'getSummary', data: input.section4 });
      if (wsButton3.readyState === WebSocket.OPEN) {
        wsButton3.send(payloadButton3);
      }
    };

    wsButton3.onmessage = (event) => {
      try {
        console.log(event.data);
      } catch (error) {
        console.error('Error parsing WebSocket message:', event.data, error);
      }
    };
  
    // Set up an event listener for when the WebSocket connection is closed
    wsButton3.onclose = () => {
      console.log('WebSocket connection closed for Button3');
    };
  };

  const handleButtonOkClick = () => {
    // Make the API call to update the product details
    const apiUrl = '/dev/product/' + productId;
    
    const requestBody = {
      feedback: input.section3,
    };

    axios.patch(apiUrl, requestBody)
      .then(response => {
        console.log('Product details updated successfully:', response.data);
        // Optionally, you can handle success or perform additional actions
      })
      .catch(error => {
        console.error('Error updating product details:', error);
        // Optionally, you can handle errors or show error messages
      });
  };

  const section1WebSocket = () => {
    // Open a WebSocket connection
    const wsSection1 = new WebSocket('wss://2gvjb28rcl.execute-api.us-east-1.amazonaws.com/dev/');

    // Set up an event listener for when the WebSocket connection is open
    wsSection1.onopen = () => {
      // Send payload for Section 1
      const payload1 = JSON.stringify({ action: 'getResolution', data: input.section4 });
      if (wsSection1.readyState === WebSocket.OPEN) {
        wsSection1.send(payload1);
      }

      // Send payload for Section 2
      const payload2 = JSON.stringify({ action: 'getSuggestion', data: input.section4 });
      if (wsSection1.readyState === WebSocket.OPEN) {
        wsSection1.send(payload2);
      }
    };
    wsSection1.onmessage = (event) => {
      try {
        setSection1Data(event.data);
      } catch (error) {
        console.error('Error parsing WebSocket message:', event.data, error);
      }
    };
    // Set up an event listener for when the WebSocket connection is closed
    wsSection1.onclose = () => {
      console.log('WebSocket connection closed');
    };
  };

  const section2WebSocket = () => {
    // Open a WebSocket connection
    const wsSection2 = new WebSocket('wss://2gvjb28rcl.execute-api.us-east-1.amazonaws.com/dev/');
    // Set up an event listener for when the WebSocket connection is open
    wsSection2.onopen = () => {
      // Send payload for Section 1
      const payload1 = JSON.stringify({ action: 'getResolution', data: input.section4 });
      if (wsSection2.readyState === WebSocket.OPEN) {
        wsSection2.send(payload1);
      }

      // Send payload for Section 2
      const payload2 = JSON.stringify({ action: 'getSuggestion', data: input.section4 });
      if (wsSection2.readyState === WebSocket.OPEN) {
        wsSection2.send(payload2);
      }
    };
    wsSection2.onmessage = (event) => {
      try {
        setSection2Data(event.data);
      } catch (error) {
        console.error('Error parsing WebSocket message:', event.data, error);
      }
    };
    // Set up an event listener for when the WebSocket connection is closed
    wsSection2.onclose = () => {
      console.log('WebSocket connection closed');
    };
  };

  // useEffect(() => {
  //   // Cleanup function to clear the interval and close the WebSocket when the component unmounts
  //   return () => {
  //     clearInterval(startCountdownRef.current);
  //     if (ws.current) {
  //       ws.current.close();
  //     }
  //   };
  // }, []);

  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <main className="col-md-12 px-md-4 main-content">
            <div className=' p-3'>
              <div className='d-flex justify-content-between align-items-center'>
                <h4 className='mb-0 fw-bold'>Button 1</h4>
                <div className=''>
                <Link to='/'><img src={homeicon} className='img-fluid' alt='homeicon'/></Link>
                {/*<Link to='/link1'><img src={refreshicon} className='img-fluid' alt='refreshicon'/></Link>*/}
                <Link to='/' className='me-2 arrow'><FaChevronLeft /></Link>
                <Link to='/' className='arrow'><FaChevronRight /></Link>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-lg-6 col-md-6'>
                <div className='mt-4'>
                  <div className='cardicon-1'>
                  <img src={texticon} className='img-fluid' alt='texticon' />
                    </div>
                  <div className="card my-card-1">

                    <div className="card-header">
                      <h4 className='mb-0'>Section 1</h4>
                      
                    </div>
                    <div className="card-body">
                      {section1Data && <p className="card-text height-cls">{section1Data}</p>}
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-lg-6 col-md-6'>
                <div className='mt-4'>
                <div className='cardicon-2'>
                  <img src={texticoncolo1} className='img-fluid' alt='texticon' />
                    </div>
                  <div className="card my-card-2">
                    <div className="card-header">
                      <h4 className='mb-0'>Section 2</h4>
                    
                    </div>
                    <div className="card-body">
                      {section2Data && <p className="card-text height-cls">{section2Data}</p>}
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-lg-12 col-md-12'>
                <div className='mt-4 mb-4'>
                <div className='cardicon-3'>
                  <img src={texticon1} className='img-fluid' alt='texticon' />
                    </div>
                  <div className="card my-card-3">
                  <div className="card-header">
                      <h4 className='mb-0'>Section 4</h4>
                     
                     
                    </div>
                    <div className="card-body">
                      <textarea className="my-input text-wrap w-100 form-control" rows="5" cols="41" type="text" name="section4" onChange={handleChange} value={input.section4}></textarea>
                    <div className='text-end'>
                    {inputStarted && (
                        <div>
                          <p className='fw-bold'>Countdown: {countdown}s</p>
                        </div>
                      )}
                    </div>
                    </div>
                   
                  </div>
                </div>
              </div>
              <div className='col-lg-12 col-md-12 mb-4 text-end'>
                <button className='my-btn2 me-3' data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={handleButton3Click}>Button3</button>
                <button className='my-btn3'>Button4</button>
              </div>
            </div>
          </main>
          <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-lg">
              
              <div className="modal-content my-card-4">
              <div className='cardicon-4'>
                  <img src={texticon2} className='img-fluid' alt='texticon' />
                    </div>
                <div className="modal-header ">
                  <h4 className="modal-title" id="exampleModalLabel">Section 3</h4>
                
                </div>
                <div className="modal-body">
                  <textarea className="my-input text-wrap w-100 form-control" rows="3" cols="41" type="text" name="section3" onChange={handleChangeFeedback} value={input.section3}></textarea>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-success" onClick={handleButtonOkClick} data-bs-dismiss="modal">ok</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Button1;
