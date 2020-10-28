export const createProject = (project) => {
    return (dispatch,getState,{getFirebase}) => {
        const firestore = getFirebase().firestore();
        const profile = getState().firebase.profile;
        const authorID = getState().firebase.auth.uid;
        firestore.collection('projects').doc(new Date().toString()).set({
            ...project,
            authorFirstName :profile.firstName,
            authorLastName :profile.lastName,
            authorID:authorID,
            createAt:new Date()
        }).then(() => {
            dispatch({type:'CREATE_PROJECT',project});
        }).catch((err) => {
            dispatch({type:'CREATE_PROJECT_ERR',err});  
        })
        
        
    }
};

export const deleteProject = (project,firstName,lastName) => {
    return (dispatch,getState,{getFirebase}) => {
        const firestore = getFirebase().firestore();
        firestore.collection('projects').doc(project.createAt.toDate().toString()).delete()
        .then(() => {
            dispatch({type:'DELETE_PROJECT',project});

            firestore.collection('notifications').add({
                title:'vừa xóa '+project.title,
                authorFirstName :firstName,
                authorLastName :lastName,
                createAt:new Date()
            }).then(() => {
                dispatch({type:'CREATE_NOTIFICATION',project});
            }).catch((err) => {
                dispatch({type:'CREATE_NOTIFICATION_ERR',err});  
            })

        }).catch((err) => {
            dispatch({type:'DELETE_ERR',err});  
        })
    }
};

