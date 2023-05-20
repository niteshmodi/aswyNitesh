import React from 'react';
import classes from './ChatBubble.module.css';
const ChatBubble = ({text,theme,imgUrl}) => {
    console.log(text);
  return (
    <div className={`${classes.bubble} ${classes[theme]}`} >
     {imgUrl && <img src={imgUrl} alt="Image" />}
     <div className={classes.btext}>
        {text && <p>{text}</p>} 

     </div>
    </div>
  )
}

export default ChatBubble