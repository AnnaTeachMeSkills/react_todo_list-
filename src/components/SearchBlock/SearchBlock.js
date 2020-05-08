import React from 'react';

import './SearchBlock.css';
import ItemStatusFilter from '../ItemStatusFilter';

const SearchBlock = () => {
    const searchBlockText = 'What are you want to search?'
    return (
        <div className="search-block">
            <input placeholder={searchBlockText} />
            <ItemStatusFilter/>
        </div>
   );
}

export default SearchBlock;