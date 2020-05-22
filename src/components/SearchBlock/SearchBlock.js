import React from 'react';

import './SearchBlock.css';

class SearchBlock extends React.Component {

    state = {
        detectedText: "",
    };

    onSearchChange = (event) => {
        const detectedText = event.target.value;
        this.setState({ detectedText });
        this.props.onSeachChange(detectedText);
    }

    render() {
        const searchBlockText = 'What are you want to search?'
        
        return (
            <div className="SearchBlock d-flex">
                <input  
                    className='form-control' 
                    placeholder={searchBlockText}
                    value={this.state.detectedText} 
                    onChange={this.onSearchChange}
                />
            </div>
        );
    }

}

export default SearchBlock;