import React,{Component} from 'react';
import './App.css';
import uuid from 'uuid';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Todo from './components/Todo/Todo';
import Header from './components/Layout/Header';
import About from './components/Layout/About';
import AddTodo from './components/Todo/AddTodo';





class App extends Component{
  state={
    todos: [ ]
  }

  //Task Completed
  markComplete = (id) =>{
    this.setState(
      {todos: this.state.todos.map((todo)=>{
        if(todo.id === id){
          todo.completed = !todo.completed
        }
        return todo;
    }) });
  }

  //Delete Todo
  delTodo = (id) =>{
    this.setState({
      todos: [...this.state.todos.filter((todo)=>
        todo.id !== id )]
      });
    }

  //Add Todo
  addTodo = (title) =>{
    const newTodo={
      id: uuid.v4(),
      title,
      completed: false
    }
    this.setState({
      todos:[...this.state.todos,newTodo]
    });
  }

  render(){
    return(
      <Router>

          <div id="app-div">
            <Header />
            <Route exact path= '/' render= {props=>(
              <React.Fragment>
              <AddTodo addTodo={this.addTodo} />
            <Todo 
            todos={this.state.todos} 
            markComplete={this.markComplete}
            delTodo={this.delTodo} 
            />
              </React.Fragment>
            )} />
            <Route path= '/About' component={About} />
            
          </div>
      </Router>
      
    )
  }
}
export default App;
