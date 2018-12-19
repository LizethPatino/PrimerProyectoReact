import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {toDo} from './toDo.json';



class App extends Component {
  constructor(){
    super();
    this.state ={
     toDo
    }
  }
  render() {
  const todos =  this.state.toDo.map((elemento, i ) => {
      return(
       
       <div className="col-md-4">
          <div className="card mt-4">
            <div className="card-header">
                <h3>{elemento.title}</h3>
                <span className="badge badge-pill badge-danger ml-2">
                  {elemento.priority}
                </span>
            </div>
            <div className="card-body">
            <p>{elemento.description}</p>
            <p><mark>{elemento.responsible}</mark></p>
            </div>
          </div>
       </div>  
      )
    } )
    return (
      <div className="App"> 

       <nav className="navbar navbar-dark bg-dark">
                <a href="" className="text-white" >Tasks
                <span className="badge badge-pill badge-light ml-2">
                    {this.state.toDo.length}
                </span>
                </a>
      </nav>  
        <div className="container">
          <div className="row mt-4">
            {todos}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
