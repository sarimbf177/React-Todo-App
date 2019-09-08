import React, { Component } from 'react'

class AddTodo extends Component {
    state={
        title: '',
    }
    onChange = (e) =>{
        this.setState({
            title: e.target.value })
        console.log(this.state.title);
        }

    onSubmit = (e) =>{
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({ title: '' })
    }
    render() {
        const formStyle={
            width: '100%',
            display: 'flex',
            justifyContent: 'center'
        }
        return (
            <form style={formStyle} onSubmit = {this.onSubmit}>
                <input 
                type='text' 
                name='title' 
                placeholder='Add Task...'
                value={this.state.title}
                style={{
                    flex:'10',
                    padding:'5px',
                }}
                onChange= {this.onChange}
                />
                <input 
                type="submit" 
                value="Add Task"
                style={{
                    flex:'1',
                    backgroundColor: 'black',
                    color: 'white',
                    border: 'none',
                    padding: '7px 10px'
                }}/> 
            </form>
        )
    }
}

export default AddTodo;
