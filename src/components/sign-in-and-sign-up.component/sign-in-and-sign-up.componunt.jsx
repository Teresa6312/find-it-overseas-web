import React from 'react';
import {FaGooglePlusG} from 'react-icons/fa';

import TextInput from '../input-text.component/input-text.component';
import FormButton from '../form-button.component/form-button.component';
import {signInWithGoogle, auth, createOrGetUser} from '../../firebase/firebase.utils';
import MassageBar from'../message-bar.component/message-bar.component';

class SignInAndSignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      confirmPassword:'',
      displayName:'',
      firstname:'',
      lastname:'',
      language:'',
      country:'',
      phoneNumber:'',
      register: false,
      message:{},
    };
  }

  handleSubmit = async event => {
    event.preventDefault();
    const {register} = this.state;
    if(register){
      const { displayName, email, password, confirmPassword, firstname, lastname, country, language, phoneNumber } = this.state;
      if (password !== confirmPassword) {
        alert("passwords don't match");
        return;
      }
  
      try {
        const { user } = await auth.createUserWithEmailAndPassword(
          email,
          password
        );
        await createOrGetUser(user, { displayName,firstname, lastname, country, language, phoneNumber});
  
        this.setState({
          email: '',
          password: '',
          confirmPassword:'',
          displayName:'',
          firstname:'',
          lastname:'',
          language:'',
          country:'',
          phoneNumber:'',
          register: false,
          message:{},
        });
      } catch (error) {
        console.log(error);
        let messageText;
        if(error.code==="auth/email-already-in-use"){
          messageText = "The email address is already in use by another account.";
        }else{
          messageText = error.message;
        }
        this.setState({
          message:{
            type:"error",
            text:messageText
          }
        })
      }
    }else{
      const {email, password} = this.state;
      try{
        const user = await auth.signInWithEmailAndPassword(email, password)
        await createOrGetUser(user);
      }catch(e){
        console.log(e);
        let messageText;
        switch(e.code) {
          case "auth/user-not-found":
            messageText = "The user with this email was not exsit!";
            break;
          case "auth/wrong-password":
            messageText = "Invalid password!";
            break;
          default:
            messageText = e.message;
          }
        this.setState({
          message:{
            type:"error",
            text:messageText
          }
        })
      }
    }
  };

  textInputHandleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  startRegister = () => {
    this.setState({
      register:!this.state.register
    })
  }

  render() {
    const {register, email, message, password, confirmPassword, displayName, firstname, lastname, country, language, phoneNumber} = this.state;
    return (
      <div className='sign-in-or-sign-up'>
        {
          register===true&&password!==""&&confirmPassword!==""&&password!==confirmPassword ?
          <MassageBar type="error">passwords don't match!</MassageBar>
          :
          null
        }
        {
          message?
            <MassageBar type={message.type}>{message.text}</MassageBar>
            : null
        }
        <form onSubmit={this.handleSubmit}>
          <TextInput
            name='email'
            type='email'
            handleChange={this.textInputHandleChange}
            value={email}
            labelText='email'
            required
          />
          <TextInput
            name='password'
            type='password'
            value={password}
            handleChange={this.textInputHandleChange}
            labelText='password'
            required
          />
          {register?
          (
           <div>
            <TextInput
              name='confirmPassword'
              type='password'
              value={confirmPassword}
              handleChange={this.textInputHandleChange}
              labelText='confirm password'
              required
            />
            <TextInput
              name='displayName'
              type='text'
              value={displayName}
              handleChange={this.textInputHandleChange}
              labelText='username'
              required
            />            
            <TextInput
              name='firstname'
              type='text'
              value={firstname}
              handleChange={this.textInputHandleChange}
              labelText='first name'
            />
            <TextInput
              name='lastname'
              type='text'
              value={lastname}
              handleChange={this.textInputHandleChange}
              labelText='first name'         
            />    
            <TextInput
              name='country'
              type='text'
              value={country}
              handleChange={this.textInputHandleChange}
              labelText='country'
              required
            />  
            <TextInput
              name='phoneNumber'
              type='text'
              value={phoneNumber}
              handleChange={this.textInputHandleChange}
              labelText='phone number'
              required
            />   
            <TextInput
              name='language'
              type='text'
              value={language}
              handleChange={this.textInputHandleChange}
              labelText='language'
              required
            />                     
           </div> 
          )
          :
          null
          }
          
          <FormButton type='submit'> {register?"Sign up":"Sign in "}</FormButton>
          <FormButton type='button' onClick={this.startRegister}> {register?"cancel":"sign up"}</FormButton>
        </form>
        <div className="sign-in-or-sign-up-third-party-log-in-break">
          <label>Or</label>
          <hr/>
        </div>
        <div className="sign-in-or-sign-up-third-party-icons">
          <div className="sign-in-or-sign-up-third-party-icons-google" onClick={signInWithGoogle}><FaGooglePlusG/></div>
        </div>
      </div>
    );
  }
}

export default SignInAndSignUp;