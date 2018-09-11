import React, { Component} from 'react';
import HomeLayout from '../components/home-layout.jsx'
import Categories from '../../categories/components/categories.jsx'
import Related from '../components/related.jsx'
import ModalContainer from '../../widgets/containers/modal.jsx'
import Modal from '../../widgets/components/modal.jsx'
import HandleError from '../../error/containers/handle-error.jsx'
import VideoPlayer from '../../player/container/video-player.jsx'
import { connect } from 'react-redux'
import {List as list} from 'immutable'
import * as actions from '../../actions/index.js'
import {bindActionCreators} from 'redux'

class Home extends Component{
    
    handleCloseModal = (event) => {
        this.props.actions.closeModal()
    }
    handleOpenModal = (id) => {
        this.props.actions.openModal(id)
    }
    render(){
        return (
            <HandleError>
                <HomeLayout>
                    <Related/>
                    <Categories 
                        categories={this.props.categories} 
                        handleOpenModal={this.handleOpenModal}
                        search={this.props.search}
                    />
                    {
                        this.props.modal.get('visibility') &&
                        <ModalContainer>
                            <Modal handleClick={this.handleCloseModal}>
                            <VideoPlayer
                                autoplay={true}
                                id={this.props.modal.get('mediaId')}
                                // src={this.state.media.src}
                                // title={this.state.media.title}
                            />
                            </Modal>
                        </ModalContainer> 
                    }
                    
                </HomeLayout>
            </HandleError>
        )
    }
}

function mapStateToProps(state, props){
    
    const categories = state.get('data').get('categories').map((categoryId) => {
        return state.get('data').get('entities').get('categories').get(categoryId)
    })

    const search =  state.get('data').get('search')
    let searchResult = list()

    if(search){
        const mediaList = state.get('data').get('entities').get('media')
        searchResult = mediaList.filter((item)=>{
            return item.get('author').toLowerCase().includes(search.toLowerCase())
        }).toList()

    }
    return {
        categories,
        search: searchResult,
        modal: state.get('modal')
    }
}

function mapDispatchToProps(dispatch){
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);