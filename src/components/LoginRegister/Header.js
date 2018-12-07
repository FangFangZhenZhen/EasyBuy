import React, {Component} from 'React';
import { Row, Col } from 'antd';
import {NavLink} from 'react-router-dom';
import './main.css';
export default class Header extends Component{
    render(){
        return (
            <div>
                {/*标题*/}
                        <img src="./img/logo.jpg" className="Login-logo"/>
                {/*标题结束*/}
            </div>
        )
    }
}