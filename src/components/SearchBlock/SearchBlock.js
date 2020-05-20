import React from 'react';

import './SearchBlock.css';
import ItemStatusFilter from '../ItemStatusFilter';

const SearchBlock = () => {
    const searchBlockText = 'What are you want to search?'
    return (
        <div className="SearchBlock d-flex">
            <input  
                className='form-control mr-3' 
                placeholder={searchBlockText} 
            />
            <ItemStatusFilter/>
        </div>
   );
}

export default SearchBlock;