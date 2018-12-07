import React, { Component } from 'react';
export default class TouXiang extends Component{
   render() {
    //  console.log(this.props)
     return (
        <div className="touxiang">
          <img alt="xxx" src={'http://47.92.98.104:8080/YG/img/'+this.props.logo}/>
          <p><a>设置头像</a></p>
        </div>
     )
   }
}