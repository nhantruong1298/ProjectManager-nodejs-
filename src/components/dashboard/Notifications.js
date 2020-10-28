import React from 'react';
import moment from 'moment';

const Notifications = (props) => {
    const {notifications} = props;
    return(
        <div className="section">
           <div className="card z-depth-0">
               <div className="card-content">
                   <span className="card-title">Thông báo</span>
                   <ul  className="notifications">
                       {notifications && notifications.map(notification => {
                        return(
                            <li  key={notification.id}>
                                <span className="pink-text">{notification.authorFirstName}{notification.authorLastName}</span>
                                <span>&nbsp;{notification.title}</span>
                                <div className="grey-text note-date">
                                    {moment(notification.createAt.toDate()).fromNow()}
                                </div>
                                <br/>
                            </li>
                         )
                        })}
                   </ul>
               </div>
           </div>
        </div>
    )
}
export default Notifications;