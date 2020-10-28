const initState={
    notifications:[
        
    ]
}

const notificationReducer = (state = initState , action) => {
    switch(action.type){
        case 'CREATE_NOTIFICATION':
            console.log('CREATE_NOTIFICATION',action.notification);
            return state;
        case 'CREATE_NOTIFICATION_ERR':
            console.log('create notification err',action.err);
            return state;
        default:
            return state;
    }
}


export default notificationReducer;