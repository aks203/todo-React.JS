import React, { Component } from 'react';
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';

import "bootstrap/dist/css/bootstrap.min.css";
import uuid from "uuid";

export default class App extends Component {
  state = {
    items : [],
    id: uuid(),
    title: "",
    inEditMode: false
  }

  //method for handling change in title of todo item
  changeHandler = e => {
    this.setState({
      title: e.target.value
    });
  }

  //method for handling the submission of todo item
  submitHandler = e => {
    e.preventDefault();
    const newItem = {
      id: this.state.id,
      title: this.state.title
    }
    const updatedItems = [...this.state.items, newItem];

    console.log(newItem);
    this.setState({
    items: updatedItems,
    title: "",
    id: uuid(),
    inEditMode: false
  });
};

//method to clear all todo items
clearAllHandler = e => {
  this.setState({
    items: []
  });
};

//method to delete individual item
deleteHandler = id => {
  const filteredItems = this.state.items.filter(item => 
    item.id != id);
  this.setState({
    items: filteredItems
  });
};

//method to handle editing of individual items
editHandler = id => {
  //calling deleteHandler for removing item from array,
  //will add the updated item as a new one.
  //then we'll see if there are any cons to this approach.
  this.deleteHandler(id);
  this.setState({
    id: id,
    title: this.state.items.filter(item => 
      item.id == id)[0].title,
    inEditMode: true
  })
}

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-4">
            <h3 className = "text-capitalize text-center">What you gonna do: </h3>
            <TodoInput title = {this.state.title} handleChange = {this.changeHandler} 
                       handleSubmit = {this.submitHandler} inEditMode = {this.state.inEditMode}/>
            <TodoList items = {this.state.items} handleClearAll = {this.clearAllHandler}
                      handleDelete = {this.deleteHandler} handleEdit = {this.editHandler}/>
          </div>
        </div>
      </div>
    )
  }
}
