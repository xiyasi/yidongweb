import React, { Component } from 'react'
import PropTypes from 'prop-types';
export default class Todoing extends Component {
    render() {
        return (
            <div>
                <h1>正在进行{this.props.todo.length}</h1>
                <tr className="list">
                    {
                        this.props.todo.map((item,idx)=><p key={idx}>
                            <input type="checkbox" id="sall0" onChange={()=>{this.props.upItemnode(item,idx)}}/>
                            {item}----<button onClick={()=>{this.props.delTodo(idx)}}>删除</button></p>)
                    }
                </tr>
                <h1>已经完成{this.props.todonode.length}</h1>
                <tr className="list">
                    {
                        this.props.todonode.map((item,idx)=><p key={idx}>
                            <input type="checkbox" id="sall2" onChange={()=>{this.props.upDatenode(item,idx)}}/>
                            {item}----<button onClick={()=>{this.props.delTodonode(idx)}}>删除</button></p>)
                    }
                </tr>
            </div>
         
        )
    }
}
Todoing.propTypes = {
    todo: PropTypes.array,
    todonode: PropTypes.array
}
Todoing.defaultProps = {
    todo: [2,3,4],
    todonode: [1,2]
    //a: 100
}