import React, { Component } from 'react'
import Search from '../components/search.jsx'
import {connect} from 'react-redux'

class SearchContainer extends Component{
    state = {
        value: ""
    }
    handleSubmit = (event) => {
        event.preventDefault()
        this.props.dispatch({
            type: 'SEARCH_VIDEO',
            payload: {
                query: this.input.value
            }
        })
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

export default connect()(SearchContainer);