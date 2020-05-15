import React from "react";

export default class ItemAddForm extends React.Component {
    
    render() {
        return(
            <div className="ItemAddForm">
                <button 
                    className="btn btn-outline-secondary"
                    onClick={() => this.props.onItemAdd('Learn CSS')}
                >
                    Add
                </button>
            </div>
        )
    }
}