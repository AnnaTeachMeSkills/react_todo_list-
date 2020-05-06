import React from 'react';

import './SearchBlock.css';

const SearchBlock = () => {
    const searchBlockText = 'What are you want to search?'
    return (
        <div className="search-block">
            <input placeholder={searchBlockText} />
        </div>
   );
}

export default SearchBlock;