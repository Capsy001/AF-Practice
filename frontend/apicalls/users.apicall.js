import axios from "axios";

export async function registerUser(user){

    axios.post("http://localhost:3000/users",user).then(function (response) {
        console.log(response);
      })



}

export async function getAllUsers(){

    var users;

   await axios.get("http://localhost:3000/users").then(function (response) {

        users=response.data; 
      })

      return users;
}