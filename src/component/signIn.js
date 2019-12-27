import React from 'react'

const signIn = (props) => {
    return (
        <div>
            <h1>Sign In</h1>
            <p>Login your account.</p>
            <hr></hr>
            <label for="email"><b>Email</b></label>
            <input type="text" placeholder="Enter Email" name="email" required></input>
            <br />
            <label for="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="psw" required></input>
            <br />
            <button>Login In</button>
        </div>
    )
}
export default signIn;