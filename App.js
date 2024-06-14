import './App.css';
import Alert from './Components/Alert';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForms from './Components/TextForms';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
 
function App() {
  const [mode, setMode] = useState('light');//whether dark mode is enabled or not.   
  const[alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    }) 

    setTimeout(() =>{
      setAlert(null);
    }, 2000)
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode has been enabled", "Success: ");
      document.title = 'TextUtils - Dark Mode';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has bee enabled", "Success: ");
      document.title = 'TextUtils - Light Mode';
    }
  }

  return (
    <>
{/*<Navbar title="My App" aboutText="About My_App"/> */}
{/*Navbar*/}
<Router>
<Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
<Alert alert={alert}/>
<div className="container my-3">
  <Routes>
    <Route element="<about/">
    <About />
    </Route>
    <Route element="/">  
    <TextForms showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>
    </Route>
    </Routes>
    </div>
</Router>
</>
  );
}
export default App;