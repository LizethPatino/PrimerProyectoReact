import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {toDo} from './toDo.json';
import TodoForm from './components/TodoForm';



class App extends Component {
  constructor(){
    super();
    this.state ={
      //se añade con el toDo todo lo de toDo.json
     toDo
    };

    //se referencia la funcion respecto a este componente
    this.handleAddTodo = this.handleAddTodo.bind(this);
  }

  handleAddTodo(todo){
    this.setState({
      toDo:[...this.state.toDo, todo ]
    })

  }

  removeTodo(index){
    this.setState({
      toDo: this.state.toDo.filter((e, i) => {
        return i !== index
     })
    })
  }


  render() {
  const todos =  this.state.toDo.map((elemento, i ) => {
      return(
       //el key sirve para identificar la identidad del elemento
       <div className="col-md-4" key={i}>
          <div className="card mt-5">
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
            <div className="card-footer">
              <button onClick= { this.removeTodo.bind(this, i)} className="btn btn-danger">Delete</button>
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
          <div className="row mt-5">
         <div className="col-md-4 text-center">
         <h3>AGREGA UNA TAREA:</h3>
          <TodoForm  onAddTodo ={this.handleAddTodo}/>
          </div>
           
        <div className="col-md-8">
          <div className="row">
        
            {todos}
          </div>
        </div>
      </div>
     </div>
    </div>  
    );
  }
}

export default App;
