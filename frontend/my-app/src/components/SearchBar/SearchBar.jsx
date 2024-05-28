import React from 'react'
import './searchbar.css'

const SearchBar = () => {
    return (
        <div>
            <div className="searchBar px-4">
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Search" style={{background:'rgb(204 204 188)',outline: 0}} />
                    <button className="btn btn-outline-secondary bg-dark" type="button" id="button-addon2" style={{color:'#fff',border:'2px solid',outline: 0}}>Button</button>
                </div>
            </div>
        </div>
    )
}

export default SearchBar
