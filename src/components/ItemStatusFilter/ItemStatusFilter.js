import React from 'react';

import './ItemStatusFilter.css';

class ItemStatusFilter extends React.Component {

    buttons = ["all","active","done", "important"];

    render() {

        const { onItemsFilterChange, filter } = this.props;

        const buttons = this.buttons.map((el) =>{
            const btnClass = filter === el ? "btn-secondary btnFont" : "btn-outline-secondary btnFont"
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