import React, { Component } from 'react'
import {createProject } from '../../store/reducers/actions/projectActions'
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import { createNotification } from '../../store/reducers/actions/notificationActions';


class CreateProject extends Component {

    state={
        title:'',
        content:'',
        
    }
    handlerChange = (e) => {
    this.setState({
        [e.target.id]:e.target.value
    })
}
    handlerSubmit = (e) => {
    e.preventDefault();
    
    this.props.createProject(this.state)
    this.props.createNotification(this.state)
    this.props.history.push('/')
}
    render() {
        const {auth} = this.props;
        if(!auth.uid) return <Redirect to="/signin"></Redirect>
        return (
            <div className="container">
                <form onSubmit={this.handlerSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Khởi tạo</h5>

                    <div className="input-field">
                        <label htmlFor="title">Tiêu đề</label>
                        <input type="text" id="title" onChange={this.handlerChange} />
                    </div>

                    <div className="input-field">
                        <label htmlFor="content">Nội dung</label>
                        <textarea className="materialize-textarea" type="text" id="content" onChange={this.handlerChange}/>
                    </div>
                   
                    <div className="input-field">
                       <button  className="btn pink lighten-1 z-depth-0">Tạo</button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth : state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        createProject:(project) => dispatch(createProject(project)),
        createNotification:(notification) => dispatch(createNotification(notification))
    }
}
export default connect(mapStateToProps,mapDispatchToProps) (CreateProject);
