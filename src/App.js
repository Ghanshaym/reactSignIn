import React, { Component } from 'react';
import './App.css';
import Person from './person/person';
import SignUp from './component/signup';
import { BrowserRouter as Router, Link, NavLink } from 'react-router-dom';
import Route from 'react-router-dom/Route'
import SignIn from './component/signIn';
// import person from './component/person'
// import axios from 'axios'
import signUp from './component/signup';
class App extends Component {
constructor(props){
  super(props);
  this.state = {
    posts : []
  }
}
  state = {
    loading : true
  };
  componentDidMount() {
    //  const url = 'locahost:3000/signup';
    this.fetchData();
    
  }
  async fetchData(){
    // const res=axios.post(``)
      // fetch('http://localhost:3000/signup')
      // .then(response => response.json())
      // .then(parsedJSON =>console.log(parsedJSON.results))
      // .catch(err => console.log(err))
  }
  // signUp(){
  //   axios.post()
  // }
  render() {
    return (
      <Router>
        <div className="App">
          <Person></Person>
          <Person/>
          {/* <h1>hello how are you</h1>
        <p1>this is working</p1><br />
        <button>switch name</button>
        <Person name='gagan' age='24' /> */}
          <Route path='/' exact strict render={
            () => {
              return <SignUp ><button onClick ={()=>{
                signUp()
              }} >Login In</button></SignUp>

            }
          } />
          {/* <SignUp/> */}
          <Route path='/login' exact strict render={

            () => {
              return <SignIn />
            }
          } />
          <NavLink to='/login'> signIn </NavLink><br />
          <NavLink to='/'> SignUp </NavLink>
        </div>

      </Router>
    )
  }
  // return React.createElement('div',{className:'App'},React.createElement('h1',null,'i am ghanshyam'))
}


export default App;
