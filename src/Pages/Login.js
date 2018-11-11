import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import fire from '.config/Fire';

class Login extends Component {
    constructor(props) {
        super(props);
    }


handleChange(e) {
    this.setState({ [e.target.name]: e.target.value })

}

render () {
    return (
        <div className='col-md-6'>
          <form>
              <div className='form-group'>
                <label> for-'exampleInputEmail1'>Email address:</label>
                <input value={this.state.email} onChange={this.handleChange} type='email' name='email' className='form-control' id='exampleInputEmail' aria-describedby='emailHelp' placeholder='Enter email' />
                <small id='emailHelp' className='form-text text-muted'>We'll never share your email with anyone else</small>
              </div>
              <div className='form-group'>
                <label for='exampleInputPassowrd1'>Password</label>
                <input value={this.state.password} onChange={this.handleChange} type='password' name='password' className='form-control' id='exampleInputPassword1' placeholder='Password' />
              </div>
              <button type='submit' onClick={this.login} className='btn btn-primary'>Login</button>
              <button onClick={this.signup} style={{marginLeft: '25px'}} className='btn btn-success'>Signup</button>
          </form>
        </div>
    )
  }
}