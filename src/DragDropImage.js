import { useState, useRef } from "react";
import { FaUpload } from 'react-icons/fa';
import imageicon from './img/gallery.png';
import axios from 'axios';
import Swal from 'sweetalert2';

const DragDropImage = () => {
  const [files, setFiles] = useState(null);
  const inputRef = useRef();

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setFiles(event.dataTransfer.files);
    handleFileUpload(event.dataTransfer.files[0]);
  };


  const handleFileUpload = async (file) => {
    const apiUrl = ` /dev/productbucket2023/images/${file.name}`;
    try {
      const formData = new FormData();
      formData.append('file', file);
  
     // Make a PUT request to the API endpoint
     const response = await axios.put(apiUrl, formData, {
      headers: {
        'Content-Type': 'multipart/form-data', // Ensure correct Content-Type header
      },
    }); 

    // Log the response
    console.log('Image upload response:', response);
  
      // Replace toast with SweetAlert2 success notification
      Swal.fire({
        icon: 'success',
        title: 'Image uploaded successfully',
        position: 'center',
        showConfirmButton: true        
      }).then(function() {
        window.location.href = "/button6";
    });
  
      // You can also console.log if needed
      // console.log('Image uploaded successfully:', response.data);
    } catch (error) {
      console.error('Error uploading image:', error);
  
      // Replace toast with SweetAlert2 error notification
      Swal.fire({
        icon: 'error',
        title: 'Error uploading image',
        position: 'center',
        showConfirmButton: true
      });
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      // Call the function to handle file upload
      handleFileUpload(file);
    }
  };
  
  return (
    <>
      <div 
        className="dropzone"
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >        
        <img src={imageicon} className='img-fluid' alt='imageicon'/>
        <input 
          type="file"
          multiple
          onChange={handleFileChange}
          hidden
          accept="image/png, image/jpeg"
          ref={inputRef}
        />
        <button onClick={() => inputRef.current.click()}><FaUpload/>&nbsp; CHOOSE IMAGE</button>
        <p>Drag and Drop Images to Upload</p>
       
      </div>
    </>
  );
};

export default DragDropImage;
