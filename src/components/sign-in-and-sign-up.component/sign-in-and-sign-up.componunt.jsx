import React from 'react';

import TextInput from '../input-text.component/input-text.component';
import FormButton from '../form-button.component/form-button.component';


class SignInAndSignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      register: false,
    };
  }

  handleSubmit = event => {
    event.preventDefault();

    this.setState({ email: '', password: '' });
  };

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className='sign-in'>
        <form onSubmit={this.handleSubmit}>
          <TextInput
            name='email'
            type='email'
            handleChange={this.handleChange}
            value={this.state.email}
            label='email'
            required
          />
          <TextInput
            name='password'
            type='password'
            value={this.state.password}
            handleChange={this.handleChange}
            label='password'
            required
          />
          <FormButton type='submit'> Sign in </FormButton>
          <FormButton type='button'> Sign Up </FormButton>
          <FormButton type='button'> Sign Up via Google </FormButton>
        </form>
      </div>
    );
  }
}

export default SignInAndSignUp;