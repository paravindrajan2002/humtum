import { useState, useRef } from "react";
import { FaUpload } from 'react-icons/fa';
import fileicon from './img/file.png';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';


const DragDropFiles = () => {
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


  // Add Access Control Allow Origin headers

  const handleFileUpload = async (file) => {
    const apiUrl = `/dev/productbucket2023/files/${file.name}`;
    try {
      // Use FormData to send files
      const formData = new FormData();
      formData.append('file', file);
  
      // Make a PUT request to the API endpoint
      const response = await axios.put(apiUrl, formData, {
        headers: {
          'Content-Type': 'multipart/form-data', // Ensure correct Content-Type header
        },
      });
  
      // Log the response
      console.log('File upload response:', response);

      // Notify user of successful file upload
      toast.success('File uploaded successfully', {position:"top-right"});
  
      // You can also console.log if needed
      // console.log('File uploaded successfully:', response.data);
    } catch (error) {
      console.error('Error uploading file:', error);
  
      // Notify user of the error
      toast.error('Error uploading file');
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
        <img src={fileicon} className='img-fluid' alt='fileicon'/>
        <input 
          type="file"
          multiple
          onChange={handleFileChange}
          hidden
          accept="image/png, image/jpeg"
          ref={inputRef}
        />
        <button onClick={() => inputRef.current.click()}><FaUpload/>&nbsp; CHOOSE FILE</button>
        <p>Drag and Drop Files to Upload</p>
        <ToastContainer 
       
        />
      </div>
    </>
  );
};

export default DragDropFiles;
