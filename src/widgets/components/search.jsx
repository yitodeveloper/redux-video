import React from 'react';
import './search.css'

const  Search = (props) => (
    <form 
        className="Search"
        onSubmit={props.handleSubmit}
    >
        <input
            ref={props.setRef} 
            type="text" 
            className="Search-input"
            placeholder="Busca tu video favorito"
            name="search"
            value={props.value}
            onChange={props.handleChange}
        />
    </form>
)

export default Search;