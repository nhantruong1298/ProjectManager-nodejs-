import React from 'react';
import {NavLink} from 'react-router-dom';


const SignedOutLinks = ()=>{
return(
        <ul className="right">
            <li><NavLink to='/signup'>Tạo tài khoản</NavLink></li>
            <li><NavLink to='/signin'>Đăng nhập</NavLink></li>
        </ul>
    )
} 

export default  SignedOutLinks;