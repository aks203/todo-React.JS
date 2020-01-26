import React, { Component } from 'react'

// get our fontawesome imports
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class TodoItem extends Component {
    render() {
        const {key, title, handleDelete, handleEdit} = this.props;
        return (
            <li key = {key} className="list-group-item text-capitalize d-flex justify-content-between my-2">
                <h5>{title}</h5>
                <div className="todo-icon">
                    <span className="text-success mx-3" onClick = {handleEdit}>
                        <FontAwesomeIcon icon = {faPen}/>
                    </span>
                    <span className="text-danger mx-3" onClick = {handleDelete}>
                        <FontAwesomeIcon icon = {faTrash}/>
                    </span>
                </div>
            </li>
        )
    }
}