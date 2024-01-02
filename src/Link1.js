import React, { useEffect, useState } from 'react';
import homeicon from './img/home-icon.png';
//import previcon from './img/prev-icon.png';
//import nexticon from './img/next-icon.png';
import readmore from './img/search.png';
import { FaChevronLeft,FaChevronRight } from 'react-icons/fa';
// import { FaSearch } from 'react-icons/fa';
import Leftsidebar from "./Leftsidebar";
import {  Link } from "react-router-dom";
import axios from 'axios';



const Link1 = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Make an API request when the component mounts
    axios.get('https://3pprd9pg81.execute-api.us-east-1.amazonaws.com/dev/product')
      .then(response => {
        // Parse the JSON string in the body
        const data = JSON.parse(response.data.body);
        setProducts(data);
      })
      .catch(error => {
        console.error('Error fetching product data:', error);
      });
  }, []); // The empty dependency array ensures the effect runs only once on mount


  return (
    <div>
      
     <div className="container-fluid">
      <div className="row">
        <Leftsidebar/>
    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 main-content">        
  

       <div className='p-3'>
        <div className='d-flex justify-content-between align-items-center'>
        <h4 className='mb-0 fw-bold'>Link 1</h4>
        <div className=''>
        <Link to='/'><img src={homeicon} className='img-fluid' alt='homeicon'/></Link>
        {/*<Link to='/link1'><img src={refreshicon} className='img-fluid' alt='refreshicon'/></Link>*/}
        <Link to='/' className='me-2 arrow'><FaChevronLeft /></Link>
        <Link to='/' className='arrow'><FaChevronRight /></Link>
        </div>
        </div>
       </div>
       <div className='bg-light mt-4'>
        {/* <div className='row d-flex justify-content-end p-3'>
          <div className='col-lg-5 col-md-6'>
            <div className='row'>
            <div className='col-8'>
          <div className="input-group ">
            <input type="text" className="form-control my-search" placeholder="Search here"></input>
            <button className="btn btn-info text-light" type="submit"><FaSearch /></button>
          </div>
          </div>
          <div className='col-4'>
          <select className="form-select" aria-label="Default select example">
            <option selected>Sort By</option>
            <option value="3">New</option>
            <option value="1">Established</option>            
          </select>
          </div>
          </div>
          </div>
        </div> */}
     
        <div className='table-responsive mt-3'>
            <table className="table text-center my-table">
              <thead>
                <tr>
                  <th className='color1'>Name</th>
                  <th className='color2'>Quantity</th>
                  <th className='color3'>Price</th>
                  <th className='color4'>Derscription</th>
                  <th className='color5'>Status</th>
                  <th className='color6'>Action</th>
                </tr>
              </thead>
              <tbody>
             
               {products.map(product => (
                <tr key={product.id}>
                  <td>{product.name}</td>
                  <td>{product.quantity}</td>                 
                  <td>{product.price}</td>
                  <td>{product.description}</td>
                  <td>{product.status}</td>
                  <td>
                    {product.status === 'New' ? 
                      <Link to={`/button1/${product.id}`}>
                        <button className="btn btn-success my-btn" ><img src={readmore} className='me-2'></img>Details</button>
                      </Link> :
                      <Link to={`/button2/${product.id}`}>
                        <button className="btn btn-success my-btn" ><img src={readmore} className='me-2'></img>Details</button>
                      </Link>
                    }
                  </td>
                </tr>
                ))}
                           
               
              </tbody>
            </table>
        </div>
        </div>
      
      </main>
   
      </div>
      </div>
    </div>
  )
}

export default Link1