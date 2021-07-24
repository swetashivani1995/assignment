import React, { useState } from 'react';
import { SearchIcon } from '../Icons/SearchIcon'
import './style.css'

const Search = ({ onSearch }) => {
    const [enteredValue, setEnteredValue] = useState('');
    return (
        <form>
            <input value={enteredValue}
                className="input-search"
                data-testid="input-search"
                onChange={e => setEnteredValue(e.target.value)} />
            <span 
            data-testid="submit"
            onClick={(e) => {
                onSearch(e, enteredValue);
            }}
                onKeyDown={e => {
                    if (e.keyCode === 13) {
                        onSearch(e, enteredValue);
                    }
                }}
            >
                <SearchIcon />
            </span>
        </form>
    )
}

export default Search;