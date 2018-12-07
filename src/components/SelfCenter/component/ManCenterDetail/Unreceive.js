import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
export default class Unreceive extends Component{
   render() {
     return (
      <div className="persondetail">
          <div className="imglogo">
            <img src="./public/selfcenter/img/logo2.png" alt="xxx" />
          </div>
          <div className="useraction">
            <p>待收货的订单:{this.props.receive}</p>
              <NavLink to="/selfcenter" exact >
                查看待收货订单
              </NavLink>
          </div>
      </div>
     )
   }
};