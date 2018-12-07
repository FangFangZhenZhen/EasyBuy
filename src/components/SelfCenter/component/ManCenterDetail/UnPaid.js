import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
export default class Unpaid extends Component{
   render() {
    //  console.log(this.props);
     return (
        <div className="persondetail">
            <div className="imglogo">
                <img src="./public/selfcenter/img/logo1.png" alt="xxx" />
            </div>
            <div className="useraction">
              <p>待支付的订单:{this.props.paid}</p>
              <NavLink to="/selfcenter" exact >
                查看待支付订单
              </NavLink>
            </div>
        </div>
     )
   }
};
