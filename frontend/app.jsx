import React from "react";
import { Component } from "react";
import Register from "./components/register";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import EditUser from "./components/edituser";

export default class App extends Component{

    constructor(props) {
        super(props);


       
      }

      
    



    render() {
        return (
        
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Register/>}/>
            <Route path='/edituser' element={<EditUser/>}/>
            <Route path='/' element={<App/>}/>
        </Routes>
    
        </BrowserRouter>

        )
      }


}