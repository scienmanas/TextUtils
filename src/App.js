import Navbar from './components/Navbar'
import Textform from './components/Textform';
import React, { useState, useEffect } from 'react';
import Alert from './components/Alert';
import About from './components/About';
import Author from './components/Author';
import Footer from './components/Footer';
import Cookies from 'js-cookie';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


export default function Example() {
  const [Mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)
  const [alertAnimation, setalertAnimation] = useState("null")

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    }
    )
    setalertAnimation("translate-x-[290px]");
    setTimeout(() => {
      setalertAnimation("null");
    }, 2000);

    setTimeout(() => {
      setAlert(null)

    }, 2500);
  }

  const toggleMode = () => {
    if (Mode === 'light') {
      setMode("dark");
      document.body.style.backgroundColor = "#34495e"
      showAlert("Dark Mode has been enabled", "success");

      // setInterval(() => {
      //   document.title = "Textutils is amazing"
      // }, 2000);
      // setTimeout(() => {
      //   document.title = "Install TextUtils Now"
      // }, 1500);
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = "#ecf0f1";
      showAlert("Light mode has been enabled", "success");
    }
    // console.log(Mode)
  };

    // Effect to save the mode in a cookie when it changes
    useEffect(() => {
      Cookies.set('Mode' ,Mode, { expires: 365 }); // Cookie will expire in 365 days
    }, [Mode]);
  
    // Effect to load the mode from the cookie on component mount
    useEffect(() => {
      const storedMode = Cookies.get('Mode');
      if (storedMode) {
        setMode(storedMode);
      }
    }, []);
  
  return (
    <>
      <Router>
        <Navbar title="Textutils" mode={Mode} toggleMode={toggleMode} />
        <Alert alert={alert} alertAnimation={alertAnimation} />
        <Routes>
          <Route path='/' element={<Textform heading='Enter text to analyse' showAlert={showAlert} alert={alert} mode={Mode} title="TextUtils - Home" />}></Route>
          <Route path="/about" element={<About mode={Mode} title="TextUtils - about" />}>
          </Route>
          <Route path="/author" element={<Author mode={Mode} title="TextUtils - author" />}>
          </Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}
