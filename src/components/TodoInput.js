import React, { Component } from 'react'

// get our fontawesome imports
import { faBook} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class TodoInput extends Component {
    render() {
        const {title, handleChange, handleSubmit, inEditMode} = this.props;
        let addEditButton;
        if(inEditMode){
            addEditButton = (<button type="submit" className="btn btn-block btn-success mt-3">
                        edit item   
                    </button>);
        }
        else {
           addEditButton = (<button type="submit" className="btn btn-block btn-primary mt-3">
                        add item
                    </button>)
        }
        return (
            <div className="card card-body my-3">
                <form onSubmit = {handleSubmit}>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text bg-primary text-white">
                                <FontAwesomeIcon icon = {faBook}/>
                            </div>
                        </div>
                        <input value = {title} onChange = {handleChange} type = "text" className = "form-control"/>
                    </div> 
                    {addEditButton}
                </form>
            </div>
        )
    }
}
