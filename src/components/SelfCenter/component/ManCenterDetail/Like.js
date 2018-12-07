import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
export default class Like extends Component{
   render() {
     return (
      <div className="persondetail">
        <div className="imglogo">
            <img src="./public/selfcenter/img/logo4.png" alt="xxx" />
        </div>
        <div className="useraction">
          <p>喜欢的商品:{this.props.like}</p>
          <NavLink to="/selfcenter" exact >
            查看喜欢的商品
          </NavLink>
        </div>
      </div>
     )
   }
};

