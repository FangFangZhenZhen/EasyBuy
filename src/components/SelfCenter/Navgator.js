import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
export default class Navgator extends Component{
   render() {
     return (
        <div className="nav">
            <h3>
                <NavLink to="/" className="grey">首页</NavLink>
                <span>&gt;</span>
                <NavLink to="/selfcenter" className = 'self-active'>个人中心</NavLink>
            </h3>
        </div>
     )
   }
};
