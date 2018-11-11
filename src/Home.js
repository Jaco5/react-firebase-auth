import React, { Component } from 'react';
import fire from './Config/Fire';


class Home extends Component {
    constructor(props) {
        super(props);
    }

logout = () => {
    fire.auth().signOut();
}
handleChange(e) {
    this.setState({ [e.target.name]: e.target.value })

}

render () {
    return (
        <div className='col-md-6'>
            <h1>You are home!</h1>
            <button onClick={this.logout}>Logout</button>
        </div>
        
    );
  }
}

export default Home;