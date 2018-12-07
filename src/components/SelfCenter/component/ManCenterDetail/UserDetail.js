import React, { Component } from 'react';
export default class UserDetail extends Component{
   render() {
    //    console.log(this.props.img1)
     return (
        <div className="users">
            <img src={'http://47.92.98.104:8080/YG/img/'+this.props.img} alt="xxx丢失" className="userleft" />
            <div className="userright">
                <h2>{this.props.name}</h2>
                <p>你好</p>
                <a>修改个人信息 &gt;</a>
            </div>
        </div>
     )
   }
};