import Navbar from './components/Navbar'
import Textform from './components/Textform';
import React, { useState } from 'react';
import Alert from './components/Alert';
import About from './components/About';
import Author from './components/Author';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


export default function Example() {
  const [Mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    }
    )
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  const toggleMode = () => {
    if (Mode === 'light') {
      setMode("dark");
      document.body.style.backgroundColor = "#042743"
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
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
    console.log(Mode)
  };
  return (
    <>
      <Router>
        <Navbar title="Textutils" mode={Mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <Routes>
          <Route path='/' element={<Textform heading='Enter text to analyse' mode={Mode} showAlert={showAlert} alert={alert} />}></Route>
          <Route path="/about" element={<About />}>
          </Route>
          <Route path="/author" element={<Author />}>
          </Route>
        </Routes>
      </Router>
    </>
  );
}
