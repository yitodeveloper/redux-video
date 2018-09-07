import React, { Component } from 'react'
import Search from '../components/search.jsx'

class SearchContainer extends Component{
    state = {
        value: ""
    }
    handleSubmit = (event) => {
        event.preventDefault()
        console.log(this.input.value)
    }
    setInputRef = element => {
        this.input = element
    }
    handleInputChange = event => {

        this.setState({
            value: event.target.value
        })
    }
    render(){
        return (
            <Search 
                handleSubmit={this.handleSubmit}
                setRef={this.setInputRef}
                handleChange={this.handleInputChange}
                value={this.state.value}
            />
        )
    }
}

export default SearchContainer;