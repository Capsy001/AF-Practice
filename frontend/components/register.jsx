import React from "react";
import { Component } from "react";
import { registerUser } from "../apicalls/users.apicall";
import {Link} from "react-router-dom"

export default class Register extends Component{

    constructor(props) {
        super(props);

        this.state={
        
            
            name:"",
            email:"",
            password:"",
            password2:"",
            role:""
            
          };
      }

      handleSubmit=(event)=>{
          event.preventDefault();

          console.log(this.state);

          registerUser(this.state);

      }

      handleName=(event)=>{
        this.setState({name: event.target.value})

      }

      handleEmail=(event)=>{
        this.setState({email: event.target.value})

      }

      handlePassword=(event)=>{
        this.setState({password: event.target.value})

      }

      handleRole=(event)=>{
        this.setState({role: event.target.value})

      }

    render() {
        return <>
        <h2>Register</h2>
        <br/>
        <form onSubmit={this.handleSubmit}>

            

            <label htmlFor="name">Name</label>
            <br>
</br>
            <input type="text" onChange={this.handleName} name="name"></input>
            <br>
</br>
            <label htmlFor="email">Email</label>
            <br>
</br>
            <input type="email" onChange={this.handleEmail} name="email"></input>
            <br>
</br>
            <label htmlFor="password">Password</label>
            <br>
</br>
            <input type="password" onChange={this.handlePassword} name="password"></input>
            <br>
</br>
            <label htmlFor="role">Role</label>
<br>
</br>
            <input type="radio" onChange={this.handleRole} id="admin" name="role" value="admin"></input>
            <label htmlFor="admin">Admin</label>
            
            <input type="radio" onChange={this.handleRole} id="user" name="role" value="user"></input>
            <label htmlFor="user">User</label>
<br/>
            <button type="submit">SUBMIT</button>
        </form>

        <br/>
        <br/>
        <br/>
        <Link to="/edituser">
            <button>Edit User</button>
        </Link>
        </>;
      }

}