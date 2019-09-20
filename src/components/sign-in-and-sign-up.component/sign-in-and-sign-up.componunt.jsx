import React from 'react';

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
      phone:'',
      register: false,
    };
  }

  handleSubmit = async event => {
    event.preventDefault();
    const {register, email, password, confirmPassword, displayName, firstname, lastname, country, language, phone} = this.state;
    if(register){
        if(password!==confirmPassword){
          return
        }else{
          try{
            const user = await auth.createUserWithEmailAndPassword(email, password)
            await createOrGetUser(user, {displayName,firstname, lastname, country, language,phone})
          }catch(e){
            console.log(e);
          }
        }
    }else{
      try{
        const user = await auth.signInWithEmailAndPassword(email, password)
        console.log(user);
        await createOrGetUser(user);
      }catch(e){
        console.log(e);
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
    const {register, email, password, confirmPassword, displayName, firstname, lastname, country, language, phone} = this.state;
    return (
      <div className='sign-in-or-sign-up'>
        {
          register===true&&password!==""&&confirmPassword!==""&&password!==confirmPassword ?
          <MassageBar type="error">passwords don't match!</MassageBar>
          :
          null
        }
        
        <form onSubmit={this.handleSubmit}>
          <TextInput
            name='email'
            type='email'
            handleChange={this.textInputHandleChange}
            value={email}
            label='email'
            required
          />
          <TextInput
            name='password'
            type='password'
            value={password}
            handleChange={this.textInputHandleChange}
            label='password'
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
              label='confirm password'
              required
            />
            <TextInput
              name='displayName'
              type='text'
              value={displayName}
              handleChange={this.textInputHandleChange}
              label='username'
              required
            />            
            <TextInput
              name='firstname'
              type='text'
              value={firstname}
              handleChange={this.textInputHandleChange}
              label='first name'
            />
            <TextInput
              name='lastname'
              type='text'
              value={lastname}
              handleChange={this.textInputHandleChange}
              label='first name'         
            />    
            <TextInput
              name='country'
              type='text'
              value={country}
              handleChange={this.textInputHandleChange}
              label='country'
              required
            />  
            <TextInput
              name='phone'
              type='phone'
              value={phone}
              handleChange={this.textInputHandleChange}
              label='phone number'
              required
            />   
            <TextInput
              name='language'
              type='text'
              value={language}
              handleChange={this.textInputHandleChange}
              label='language'
              required
            />                     
           </div> 
          )
          :
          null
          }
          
          <FormButton type='submit'> {register?"Sign up":"Sign in "}</FormButton>
          <FormButton type='button' onClick={this.startRegister}> {register?"cancel":"sign up"}</FormButton>
          
          <FormButton type='button' onClick={signInWithGoogle}> Sign Up via Google </FormButton>
          
        </form>
      </div>
    );
  }
}

export default SignInAndSignUp;