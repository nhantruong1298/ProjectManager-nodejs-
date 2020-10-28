import authReducer from './authReducer'
import { firebaseReducer } from 'react-redux-firebase'
import { firestoreReducer } from 'redux-firestore'
import projectReducer from './projectReducer'
import { combineReducers } from 'redux'
import  notificationReducer  from './notificationsReducer'

const rootReducer =  combineReducers({
    auth: authReducer,
    project: projectReducer,
    firebase: firebaseReducer,
    firestore: firestoreReducer,
    notification: notificationReducer
})

export default rootReducer