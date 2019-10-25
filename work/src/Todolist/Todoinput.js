import React, { Component } from 'react'

export default class Todoinput extends Component {
    constructor(){
        super();
        this.state = {
            n1: 0,
            n2: 0
        }
    }
    handleInput = (e)=>{
        if(e.keyCode === 13){
            this.props.addTodo(e.target.value);
        }
    }
    handleChange = (e)=>{
        this.setState({
            [e.target.name]: parseInt(e.target.value===''?0:e.target.value)
        })
    }
    render() {
        return (
            <div>
                <label style={{
                    color:this.state.n1+this.state.n2>10?'red':'back',
                    fontSize:30
                    }} 
                    htmlFor="inp">ToDoList：</label>
                <input ref={inp=>this.inp = inp} type="text" onChange={this.handleChange} onKeyDown={(e)=>this.handleInput(e)}/>
                
            </div>
        )
    }
}