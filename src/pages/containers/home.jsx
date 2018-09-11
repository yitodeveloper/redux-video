import React, { Component} from 'react';
import HomeLayout from '../components/home-layout.jsx'
import Categories from '../../categories/components/categories.jsx'
import Related from '../components/related.jsx'
import ModalContainer from '../../widgets/containers/modal.jsx'
import Modal from '../../widgets/components/modal.jsx'
import HandleError from '../../error/containers/handle-error.jsx'
import VideoPlayer from '../../player/container/video-player.jsx'
import { connect } from 'react-redux'

class Home extends Component{
    state = {
        modalVisible: false
    }
    handleCloseModal = (event) => {
        this.setState({
            modalVisible: false,
        })
    }
    handleOpenModal = (media) => {
        this.setState({
            modalVisible: true,
            media
        })
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
                        this.state.modalVisible &&
                        <ModalContainer>
                            <Modal handleClick={this.handleCloseModal}>
                            <VideoPlayer
                                autoplay={true}
                                src={this.state.media.src}
                                title={this.state.media.title}
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
    return {
        categories: state.data.categories,
        search: state.search
    }
}

export default connect(mapStateToProps)(Home);