import { useState } from 'react';
import Login from './Screens/Login/Login';
import ChatBot from './Screens/ChatBot/ChatBot';
import Header from './components/Layout/Header';
function App() {

  const [isLoggedIn,setIsLoggedIn] = useState(localStorage.getItem("isLoggedIn")==="true");
  //this will handle if we should show the chatBot or not i.e only show if we are logged in
  const loginHandler = () => {
    setIsLoggedIn(true);
    localStorage.setItem("isLoggedIn", "true");
  }
 
  const logOutHandler = () => {
    setIsLoggedIn(false);
    localStorage.setItem("isLoggedIn", "false");
  }
  
  return (
    <>
     {isLoggedIn ? <ChatBot onLogout={logOutHandler}/> : <Login onLogin={loginHandler}/> }
    </>
   
    
  );
}

export default App;
