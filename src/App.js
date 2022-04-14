import './App.css';
import Aboutus from './components/Aboutus';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import React, { useState } from 'react'
import Alert from './components/Alert';
import Signup from './components/Signup.js';
import {
  BrowserRouter as Router,
  Routes, 
  Route
} from "react-router-dom";
import Login from './Login';

export default function App() {
  const [mode, setMode] = useState("light");

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      Type: type
    })
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#242158';
      showAlert("Dark mode has been enable", "success")
      

    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enable", "success")

    }
  }
  return (
    <>
    <Router>
      <Navbar title="Textutils" about='About' mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />

      <div className="container">
        <Routes>
          <Route path="/"  element={<TextForm showAlert={showAlert} heading="Enter Text here" mode={mode} />} />
          <Route path="/about" element={<Aboutus />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
      </Router>
    </>

  );
}




