import React from "react";
import { Component } from "react";
import { getAllUsers, registerUser } from "../apicalls/users.apicall";
import {Link} from "react-router-dom"

export default class EditUser extends Component{

    constructor(props) {
        super(props);

        this.state={
        
            users:[],
            selectedUser:"",
            name:"",
            email:"",
            password:"",
            password2:"",
            role:"",
            selectedValue:""
            
          };
      }

      async componentDidMount(){

        const users=await getAllUsers();

        this.setState({users:users})

        setTimeout(()=>{
            console.log(this.state.users)
        }, 2000);
        



        
       
        
      }

      handleSubmit=async (event)=>{
          event.preventDefault();

          const user={name: this.state.name,
                      email:this.state.email,
                    password:this.state.password,
                  role:this.state.password}
            await axios.put("http://localhost:3000/users/"+this.state.selectedUser, user).then((response)=>{

            console.log(response);
            })
          

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

      handleSelect=(event)=>{

        event.stopPropagation();

        console.log("selected"+this.state.selectedUser)
        this.setState({selectedUser:event.target.value});

        this.state.users.map((user=>{
          if(user._id==this.state.selectedUser){
            this.setState({
              name: user.name,
              email: user.email,
              password: user.password
            })
          }
        }))
        

        }

        

      

    render() {
        return <>
        <h2>Edit User</h2>
        <br/>
        <form onSubmit={this.handleSubmit}>

            <select defaultValue={this.state.selectedValue} onChange={this.handleSelect}>
                {this.state.users.map((user)=><option key={user.id} value={user._id}>{user.name}</option>)}
            </select>
            <br/>
            <label htmlFor="name">Name</label>
            <br>
</br>
            <input type="text" value={this.state.name} onChange={this.handleName} name="name"></input>
            <br>
</br>
            <label htmlFor="email">Email</label>
            <br>
</br>
            <input type="email" value={this.state.email} onChange={this.handleEmail} name="email"></input>
            <br>
</br>
            <label htmlFor="password">Password</label>
            <br>
</br>
            <input type="password" value={this.state.password} onChange={this.handlePassword} name="password"></input>
            <br>
</br>
            <label htmlFor="role">Role</label>
<br>
</br>
            <input type="radio"  onChange={this.handleRole} id="admin" name="role" value="admin"></input>
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