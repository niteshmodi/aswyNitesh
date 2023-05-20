import React, { useState, useEffect } from "react";
import classes from "./ChatBot.module.css";
import ChatBubble from "../../components/ChatBubble/ChatBubble";
import Header from "../../components/Layout/Header";
import data from "../../data";
const ChatBot = (props) => {
  const themes = ["first", "second", "third"];
  const [theme, settheme] = useState( localStorage.getItem("theme") || themes[0]);
  //this will check first if any theme is present in local storage or not if present use it otherwise use default
  const [displayedMessages, setDisplayedMessages] = useState([]);
  //this contains all the messages that will be shown in the form of chatBubble



  const [intervalDuration, setIntervalDuration] = useState(1000);
  //the will handle the interval duration state -> if users changes the interval duration (defailt will be 1000ms)
 


  //this will set the theme if we reload the page (updating hte body className , jab user theme change krega)
  useEffect(() => {
    document.body.className = classes[theme];
    localStorage.setItem("theme", theme);
  }, [theme]);

 //this will make the chatbubbles popping from start we if reload the page (reset the displayed messages)
  useEffect(() => {
    startInterval();
  }, []);

  useEffect(() => {
    //i have to fix the problem here -> fixed
    if (displayedMessages.length > 0) {

        setDisplayedMessages([]);
        startInterval();
      }
  }, [intervalDuration]);


  const switchthemeHandler = () => {
    settheme((prevtheme) => {
      const currentIndex = themes.indexOf(prevtheme);
      const nextIndex = (currentIndex + 1) % themes.length;
      setDisplayedMessages([]);
      startInterval();
      return themes[nextIndex];
    });
  };
  
  const intervalDurationChangeHandler = (event) => {
    const newIntervalDuration = Number(event.target.value);
    setIntervalDuration(newIntervalDuration);
  };

 const formHandler =(event) => {
  event.preventDefault();
 }

  //This is for chat bubble delaying part
  const startInterval = () => {
    let index = 0;
    const interval = setInterval(() => {
      // console.log(index, data.messages[index]);
      if (index < data.messages.length - 1) {
        setDisplayedMessages((prevMessages) => [
          ...prevMessages,
          data.messages[index],
        ]);
        index++;
      } else {
        clearInterval(interval);
      }
    }, intervalDuration);
    return () => clearInterval(interval);
  };
  return (
    // <div>
    //   {/* <button onClick={switchthemeHandler}>Switch Background theme</button> */}
    // </div>
    <>
      <Header
        onLogout={props.onLogout}
        onSwitchTheme={switchthemeHandler}
        onIntervalDurationChange={intervalDurationChangeHandler}
        intervalDuration={intervalDuration}
      ></Header>
      <div className={classes.chatbot}>
        <div className={classes.bubbles}>
          {displayedMessages.map((message) => (
            <ChatBubble key={message.key} text={message.text} theme={theme} imgUrl={message.imgUrl} />
          ))}
        </div>
        <form className={classes.form} onSubmit={formHandler}>
        <input type="text" placeholder="Type your message here" />
      </form>
      </div>


    </>
  );
};

export default ChatBot;

