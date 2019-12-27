import React from 'react';
import {BrowserRouter as Router,Link} from 'react-router-dom'
// import Box from '@material-ui/core/Box';
const user = {
    firstName : 'gagan',
    lastName : 'kumar'
}
class signUp extends React.Component{

   demo(user) {
    return this.firstName + '' + this.lastName
   } 
    constructor(props){
        super(props);
        this.state = {
             userDetail:{
                 
             }
            
        }
        // this.signupFunc=this.signupFunc.bind(this)
    }

handleChange =(e)=> {
  
    this.setState({
        userDetail : {
            ...this.state.userDetail,
            [e.target.name]: e.target.value


        }
       
    })
    
    console.log("e=====",this.state.userDetail)
    // console.log('value',e.target.name);
    

}


signupFunc1(e){
    e.preventDefault()
    console.log("e=====",this.state.userDetail)
}



render(){
    return (
        <div>
            {/* <p1>my name is {props.name} and i am {props.age} years old</p1><br/>
            <pi>{props.children}</pi> */}
            <h1>Sign Up</h1>
            <p>Please fill in this form to create an account.</p>
            <hr></hr>
            <form onSubmit={this.handleSubmit} >
            <label for="firstName"><b>firstName</b></label>
            <input type="text" placeholder=" Enter firstName" name="firstname" required onChange ={this.handleChange} ></input>
            <br />
            <label for="lastName"><b>lastName</b></label>
            <input type="text" placeholder=" Enter lastName" name="lastname" required onChange ={this.handleChange}></input>
            <br />
            <label for="email"><b>Email</b></label>
            <input type="text" placeholder="Enter Email" name="email" required onChange ={this.handleChange}></input>
            <br />
            <label for="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="psw" required onChange ={this.handleChange}></input>
            <br />
            <button type="submit"onClick={(e)=>this.signupFunc1(e) }>signUp</button>
            </form>
        </div>

    )
        }
}

export default signUp;