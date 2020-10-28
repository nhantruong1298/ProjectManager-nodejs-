import React from 'react'
import {firestoreConnect} from 'react-redux-firebase';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {deleteProject} from '../../store/reducers/actions/projectActions';
import { Redirect } from 'react-router-dom'


function ProjectDetails(props) {
    const {project,profile,auth} = props;
    const pressHandle = () => {
            let JSAlert = require("js-alert");
            let alert = new JSAlert("Bạn có chắc chắn muốn hủy dự án này ?", "LƯU Ý");
            alert.addButton("Có").then(function(){
            props.deleteProject(project,profile.firstName,profile.lastName);
        });
        alert.addButton("Không").then(function() {
            console.log("Alert button No pressed");
        });
        alert.show();
    }
    if(!auth.uid) return <Redirect to='/' />
    if(project){
            return (
            <div className="container section project-details">
                <div className="card z-depth-0">
                <button onClick={pressHandle} className="right" id="cancel">X</button>
                    <div className="card-content">
                        <span className="card-title">{project.title}</span>
                        <p>{project.content}</p>
                    </div>
                    <div className="card-action gret lighten-4 grey-text">
                        <div>Đăng bởi {project.authorFirstName} {project.authorLastName}</div>
                        <div>{project.createAt.toDate().toDateString()}</div>
                    </div>
                </div>
            </div>
        )
    }
    else{
        return(
            <div className="container center">
                <p>Loading project...</p>
            </div>
        )
    }
}

const mapStateToProps = (state , ownProps) => {
    
    const id = ownProps.match.params.id;
    const projects = state.firestore.data.projects;
    const project = projects ? projects[id] : null;
     return{
        project:project,
        profile:state.firebase.profile,
        auth:state.firebase.auth
     }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        deleteProject:(project,firstName,lastName) => dispatch(deleteProject(project,firstName,lastName))
    }
}

export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    firestoreConnect([
        { collection: 'projects' }
    ])
)  (ProjectDetails)