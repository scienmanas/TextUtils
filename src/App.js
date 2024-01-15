import Navbar from './components/Navbar'
import Textform from './components/Textform';
import React, { useState, useEffect } from 'react';
import Alert from './components/Alert';
import About from './components/About';
import Author from './components/Author';
import Footer from './components/Footer';
import PopUpPromt from './components/PopUpPromt';
import Cookies from 'js-cookie';
import Loading from './components/Loading';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


export default function Example() {

  const [alert, setAlert] = useState(null);
  const [alertAnimation, setalertAnimation] = useState("null");
  const [searchText, setSearchText] = useState("")
  const [replaceWith, setReplaceWith] = useState("")
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const [Mode, setMode] = useState(() => {
    const storedMode = Cookies.get('Mode');
    return storedMode ? storedMode : 'light';
  });

  if (Mode === 'light') {
    document.body.style.backgroundColor = "#ecf0f1";
  }
  else {
    document.body.style.backgroundColor = "#34495e"
  }

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    }
    )
    setalertAnimation("translate-x-[290px]");
    setTimeout(() => {
      setalertAnimation("null");
    }, 2300);

    setTimeout(() => {
      setAlert(null)

    }, 3000);
  }

  const toggleMode = () => {
    if (Mode === 'light') {
      setMode("dark");
      document.body.style.backgroundColor = "#34495e"
      showAlert("Dark Mode has been enabled", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = "#ecf0f1";
      showAlert("Light mode has been enabled", "success");
    }
  };

  const showPopUp = (setText) => {
    document.getElementById("prompt-box-1").classList.remove("hidden");
    document.getElementById("prompt-box-1").classList.add("flex");
    document.getElementById("prompt-box-1").classList.add("bg-slate-600");
    document.getElementById("prompt-box-2").classList.remove("hidden");
    document.getElementById("prompt-box-2").classList.add("flex");
    setSearchText("");
    setReplaceWith("");
  }

  const closePrompt = () => {
    document.getElementById("prompt-box-1").classList.remove("flex");
    document.getElementById("prompt-box-1").classList.add("hidden");
    document.getElementById("prompt-box-2").classList.remove("flex");
    document.getElementById("prompt-box-2").classList.add("hidden");
    setSearchText("");
    setReplaceWith("");
    showAlert("Prompt cancelled", "failed");
  }

  const submitPrompt = () => {
    document.getElementById("prompt-box-1").classList.remove("flex");
    document.getElementById("prompt-box-1").classList.add("hidden");
    document.getElementById("prompt-box-2").classList.remove("flex");
    document.getElementById("prompt-box-2").classList.add("hidden");
    if (searchText.length > 0 && replaceWith.length > 0) {
      let newText = text.split(searchText);
      console.log(newText)
      if (newText.length > 0) {
        setText(newText.join(replaceWith));
        showAlert(`${searchText} replaced with ${replaceWith}`, "success");
      }
      else {
        showAlert("No occurences found", "failed");
      }
    }
    else {
      showAlert("Please fill all the fields", "failed");
    }

  }

  useEffect(() => {
    Cookies.set('Mode', Mode, { expires: 365 }); // Cookie will expire in 365 days
  }, [Mode]);

  if (loading) {
    return <Loading loading={loading} />
  }

  return (
    <>
      <PopUpPromt showPopUp={showPopUp} closePrompt={closePrompt} submitPrompt={submitPrompt} heading="Replace the text" searchText={searchText} replaceWith={replaceWith} setSearchText={setSearchText} setReplaceWith={setReplaceWith} />
      <Router>
        <Navbar title="Textutils" mode={Mode} toggleMode={toggleMode} />
        <Alert alert={alert} alertAnimation={alertAnimation} />
        <Routes>
          <Route path='/' element={<Textform heading='Enter text to analyse' text={text} setText={setText} showAlert={showAlert} alert={alert} mode={Mode} showPopUp={showPopUp} title="TextUtils - Home" searchText={searchText} replaceWith={replaceWith} setSearchText={setSearchText} setReplaceWith={setReplaceWith} />}></Route>
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


// Effect to load the mode from the cookie on component mount
// useEffect(() => {
//   const storedMode = Cookies.get('Mode');
//   if (storedMode) {
//     setMode(storedMode);
//   }
// }, []);

// setInterval(() => {
//   document.title = "Textutils is amazing"
// }, 2000);
// setTimeout(() => {
//   document.title = "Install TextUtils Now"
// }, 1500);

// document.body.style.backgroundColor = Mode

// const removeBodyClasses = () => {
//   document.body.classList.remove("hello-class")
// };

// document.body.classList.add("hi-class");

// useEffect(() => {
//   const fetchData = async () => {
//     // Fetch or load your data here
//     // For example, if you are fetching data from an API:
//     // const response = await fetch('your_api_url');
//     // const data = await response.json();

//     // For now, let's simulate loading by waiting for 2000 milliseconds
//     await new Promise(resolve => setTimeout(resolve, 2000));

//     // Set loading to false after data is fetched or loaded
//     setLoading(false);
//   };

//   fetchData();
// }, []); // Empty dependency array means this effect runs once when the component mounts
