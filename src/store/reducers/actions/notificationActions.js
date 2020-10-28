export const createNotification = (notification) => {
    return (dispatch,getState,{getFirebase}) => {
        const firestore = getFirebase().firestore();
        const profile = getState().firebase.profile;
        firestore.collection('notifications').add({
            title:'vừa thêm 1 dự án',
            authorFirstName :profile.firstName,
            authorLastName :profile.lastName,
            createAt:new Date()
        }).then(() => {
            dispatch({type:'CREATE_NOTIFICATION',notification});
        }).catch((err) => {
            dispatch({type:'CREATE_NOTIFICATION_ERR',err});  
        })
        
        
    }
};
