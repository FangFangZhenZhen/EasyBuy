import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
export default class Uncomment extends Component{
   render() {
    //  console.log(this.props);
     return (
      <div className="persondetail">
        <div className="imglogo">
              <img src="./public/selfcenter/img/logo3.png" alt="xxx" />
        </div>
        <div className="useraction">
          <p>待评价商品数:{this.props.remark}</p>
          <NavLink to="/selfcenter" exact >
              查看待评价商品
          </NavLink>
        </div>
      </div>
     )
   }
};
