//选项卡组件
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
// import style from './SelfCenter.css';

const Tab = () =>{
    return (
        <ul className="userul">
          {/* <li>
            <NavLink to="/selfcenter" activeClassName = 'active' exact >
                欢迎
            </NavLink>
          </li> */}
          <li>
            <NavLink to="/selfcenter" activeClassName = 'self-active' exact >
                我的订单
            </NavLink>
          </li>
          <li>
            <NavLink to="/selfcenter/my-save/0/0" activeClassName = 'self-active' >
                我的收藏
            </NavLink>
          </li>
          <li>
            <NavLink to="/selfcenter/man-center" activeClassName = 'self-active' >
                我的个人中心
            </NavLink>
          </li>
          <li>
            <NavLink to="/selfcenter/cash-count" activeClassName = 'self-active' >
                现金账户
            </NavLink>
          </li>
          <li>
            <NavLink to="/selfcenter/profile" activeClassName = 'self-active' >
                收货地址
            </NavLink>
          </li>
          <li>
            <NavLink to="/selfcenter/self-information" activeClassName = 'self-active' >
                个人信息
            </NavLink>
          </li>
          <li>
            <NavLink to="/selfcenter/edit-pwd" activeClassName = 'self-active' >
                修改密码
            </NavLink>
          </li>
        </ul>
    );
};
export default Tab;