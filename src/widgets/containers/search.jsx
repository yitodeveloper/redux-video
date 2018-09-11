import React, { Component } from 'react'
import Search from '../components/search.jsx'
import {connect} from 'react-redux'
import * as actions from '../../actions/index.js'
import {bindActionCreators} from 'redux'

class SearchContainer extends Component{
    state = {
        value: ""
    }
    handleSubmit = (event) => {
        event.preventDefault()
        this.props.actions.searchAsyncEntities(this.input.value)
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

function mapDispatchToProps(dispatch){
    return {
        actions: bindActionCreators(actions,dispatch)
    }
}
export default connect(null, mapDispatchToProps)(SearchContainer);