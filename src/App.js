import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter} from 'react-router-dom';
import Main from "./Components/MainComponent";
//import pizzaBackground from "./image/pizzaBackground.jpeg";
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-social/bootstrap-social.css';
import './App.css';

class App extends Component{
  render(){
    return(
      <BrowserRouter>
         <div className="App">
           <Main />
         

         </div>
      </BrowserRouter>
    );
  }
}


export default App;
