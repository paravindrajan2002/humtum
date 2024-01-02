
import './App.css';
import {  Routes,  Route} from "react-router-dom";
import Homepage from './Homepage';
import Button1 from './Button1';
import Button2 from './Button2';
import Button6 from './Button6';
import Link1 from './Link1';
import Link3 from './Link3';


function App() {
  return (
    <div className='my-react-project'>
   
    <Routes> 
        <Route path="/" element={<Homepage />} />
        <Route path="/link1" element={<Link1 />} />
        <Route path="/link3" element={<Link3 />} />       
        <Route path="/button1/:productId" element={<Button1 />} />
        <Route path="/button2/:productId" element={<Button2 />} />
        <Route path='/button6' element={<Button6 />} />
        
    </Routes>


  
   </div>
  );
}

export default App;
