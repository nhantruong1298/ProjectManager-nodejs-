import React, { Component } from 'react'
import {signUp} from '../../store/reducers/actions/authActions';
import {connect} from 'react-redux'
import { Redirect } from 'react-router-dom'



class SignUp extends Component {

    state={
        email:'',
        password:'',
        firstName:'',
        lastName:'',
    }
    handlerChange = (e) => {
    this.setState({
        [e.target.id]:e.target.value
    })
}
    handlerSubmit = (e) => {
    e.preventDefault();
    this.props.signUp(this.state)
}
    render() {
        const {auth } = this.props;
        window.onerror = function (msg) {
           let arr = msg.split(':');
            alert(arr[1]);         
         return true; // same as preventDefault
        };
        if(auth.uid) return <Redirect to='/' />
        return (
            <div className="container">
                <form onSubmit={this.handlerSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Tạo tài khoản</h5>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={this.handlerChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Mật khẩu</label>
                        <input type="password" id="password" onChange={this.handlerChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="firstName">Họ</label>
                        <input type="text" id="firstName" onChange={this.handlerChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="lastName">Tên</label>
                        <input type="text" id="lastName" onChange={this.handlerChange}/>
                    </div>
                    <div className="input-field">
                       <button className="btn pink lighten-1 z-depth-0">Đăng ký</button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        auth:state.firebase.auth,
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        signUp : (newUser) => dispatch(signUp(newUser))
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (SignUp);
