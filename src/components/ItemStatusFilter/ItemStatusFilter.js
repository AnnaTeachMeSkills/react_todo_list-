import React from 'react';

import './ItemStatusFilter.css';

class ItemStatusFilter extends React.Component {

    buttons = ["all","active","done"];

    render() {

        const { onItemsFilterChange, filter } = this.props;

        const buttons = this.buttons.map((el) =>{
            const btnClass = filter === el ? "btn-success" : "btn-outline-secondary"
            return (
                <button 
                    key={el}
                    className={`btn ${btnClass}`}
                    onClick={() => onItemsFilterChange(el)}
                >{el}</button>
            );
        });

        return (
            <div className="btn-group ItemStatusFilter">
                {buttons}
            </div>
        );
    }
}


export default ItemStatusFilter