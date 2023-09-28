import { useState } from 'react';
import './App.css';
import Nav from './component/Navbar'
import Tf  from './component/Txtfield'
import Alert from './component/Alert';
import About from './component/About';
import React from "react";
import {
  BrowserRouter as Router,
  Routes ,
  Route,
  
} from "react-router-dom";



function App() {

  const [mode,setMode]=useState('light');

  const [alert , setAlert] = useState(null);

  const showAlert = (massage, type) =>{
          setAlert({
            msg : massage,
            type : type
          });
          setTimeout(() => {
            setAlert(null);
          },2000);  
      
  }

  const togglemode =()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#2d265a';
      showAlert("Dark Mode is set", "success");
    }else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light Mode is set", "success");
    }
  }

  

  return (
    <>
          <Router>
          <Nav  title="Textutils" About="About us" home="Home" mode={mode} togglemode={togglemode}/>
          <Alert  alert= {alert} />
          <div className="container my-5">
          <Routes >
              <Route path="/about" element={<About  mode={mode}/>}/>
              <Route exact path="/" element={<Tf heading='Enter the text for format' mode={mode} showAlert ={showAlert} />}/>
            </Routes>

          </div>
          </Router>

    </>
  );
}

export default App;
