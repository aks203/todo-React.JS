import React, { Component } from 'react'
import TodoItem from './TodoItem'

export default class TodoList extends Component {
    render() {
        const {items, handleClearAll, handleDelete, handleEdit} = this.props;
        return (
            <ul className="list-group my-5">
                <h3 className="text-capitalize text-center">
                    todo-items
                </h3>
                {
                    items.map(eachItem => {
                        return(
                        <TodoItem key = {eachItem.id} title = {eachItem.title} 
                                  handleDelete = {() => handleDelete(eachItem.id)}
                                  handleEdit = {() => handleEdit(eachItem.id)}/>    
                        )}
                    )
                }
                <button type="button" onClick={handleClearAll} className="btn btn-danger btn-block text-capitalize mt-5">
                    Clear list
                </button>
            </ul>
        )
    }
}
