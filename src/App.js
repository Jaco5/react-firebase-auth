import React, { Component } from 'react';
import './App.css';
import * as firebase from "firebase";
import fire from './Config/Fire';
import Login from './Login';
import Home from './Home';



class App extends Component {

  constructor() {
    super();
    this.state = {
      speed : 10,
      user : {}
    }
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      console.log(user); 
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user : null });
        
      }
    })
  }

  

  componentDidMount() {
    this.authListener();
      const rootRef = firebase.database().ref().child('react');
      const speedRef = rootRef.child('speed');
      speedRef.on('value', snap => {
        this.setState({
          speed : snap.val()
        })
      });
  }

  render() {
    return (
      <div className="App">
    {this.state.user ? (<Home />) : (<Login />)}
        <h1>{this.state.speed}</h1>

      </div>
    );
  }
}

export default App;
