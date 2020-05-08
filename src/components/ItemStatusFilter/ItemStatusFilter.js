import React from 'react';

import './ItemStatusFilter.css';

class ItemStatusFilter extends React.Component {
    render() {
        return (
            <div className="btn-group ItemStatusFilter">
                <button className="btn btn-success">All</button>
                <button className="btn btn-outline-secondary">Active</button>
                <button className="btn btn-outline-secondary">Done</button>
            </div>
        );
    }
}


export default ItemStatusFilter