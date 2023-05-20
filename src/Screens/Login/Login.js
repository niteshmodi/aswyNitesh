import { useState } from 'react';
import logo from '../../assets/wysalogo.png';
import classes from './Login.module.css';
const Login = (props) => {
  const [profileUrl, uploadProfilePicture] = useState('');
 const loginHandler = () => {
    props.onLogin();
  }
  const fileChangeHandler = (event) => {
    const file = event.target.files[0];
    if(file){
      uploadProfilePicture(file.name);
    }
  }
  return (
    <>
      <div className={classes.container}>
      <img className={classes.logo} src={logo} alt="Logo" />
      <label className={classes.uploadButton}>
       <p>Upload Your Profile Picture</p>
          <input className={classes.fileInput} type="file" onChange={fileChangeHandler} />
        </label>
      <button onClick={loginHandler} className={classes['button-58']}>Login</button>
    </div>
    </>
  )
}

export default Login;



//remainder
//have to add the upload profile picture option