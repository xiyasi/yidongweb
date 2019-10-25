import React, { Component } from 'react'
import Todoing from './Todoing';
import Todoinput from './Todoinput';

export default class Todolist extends Component {
    constructor(){
        super();
        this.state = {
            todo: [1,2,3],
            todonode: [1,2]
        }
    }
    addItem = (msg)=>{
        this.setState({
            todo: [...this.state.todo,msg]
        })
        console.log(msg);
    }
    delItem = (a)=>{
        var todo = [...this.state.todo];
        todo.splice(a,1);
        this.setState(
            {todo:todo}
        )
    }
    delDate = (b)=>{
        var todonode = [...this.state.todonode];
        todonode.splice(b,1);
        this.setState(
            {todonode:todonode}
        )
    }
    upItem = (msg,c) =>{
        var todo = [...this.state.todo];
        todo.splice(c,1);
        this.setState(
            {todonode: [...this.state.todonode,msg]}
        )
        this.setState(
            {todo:todo}
        )
    }
    upDate = (msg,d) =>{
        var todonode = [...this.state.todonode];
        todonode.splice(d,1);
        this.setState(
            {todo: [...this.state.todo,msg]}
        )
        this.setState(
            {todonode:todonode}
        )
    }
    render() {
        return (
            <div>
                <Todoinput addTodo={this.addItem}/>
                <Todoing delTodo={this.delItem} todo={this.state.todo} 
                delTodonode={this.delDate} todonode={this.state.todonode}
                upItemnode={this.upItem} upDatenode={this.upDate}/>
                
            </div>
        )
    }
}