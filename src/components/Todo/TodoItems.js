import React, { Component } from 'react'
import PropTypes from 'prop-types';

class TodoItems extends Component {
    
    getStyle = () =>{
        return {
            backgroundColor: '#f4f4f4',
            color: 'black',
            padding: '10px',
            textDecoration: this.props.todos.completed? 'line-through': 'none'
        }
    }
    render() {
        const btnStyle= {
            backgroundColor: 'red',
            borderRadius: '50%',
            padding: '5px 10px',
            float: 'right',
            color: 'white',
            border: 'none'
        }
    const {title,id} = this.props.todos;
        return (
            <div style={this.getStyle()}>
               <p>
               <input type="checkbox" 
               onChange = {this.props.markComplete.bind(this, id)}/> {' '} 
               { title } 
               <button 
               style={btnStyle} 
               onClick={this.props.delTodo.bind(this, id)}
               >
                   x
                   </button>
               </p>
            </div>
        )
    }
}

TodoItems.propTypes ={
    todos: PropTypes.object.isRequired
}
export default TodoItems;
