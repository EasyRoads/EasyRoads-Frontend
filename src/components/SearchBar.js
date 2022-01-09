import React, { useState } from 'react';

const SearchBar = (props) => {
    const [searchWord, setSearchWord] = useState("");

    return (
        <div>
            <form onSubmit={(e) => { 
                e.preventDefault(); 
                props.onSubmit(searchWord);}
            }>
                <div>
                    <input 
                        size="large"
                        className="search-input"
                        name="location"
                        placeholder="Enter location"
                        value={searchWord}
                        onChange={(e) => {
                            setSearchWord(e.target.value);
                        }}
                    />
                    <button
                        size="large"
                        type="primary"
                        className="search-button"
                        htmltype="submit"
                    >
                    </button>
                </div>
            </form>
        </div>
    )
}

export default SearchBar;