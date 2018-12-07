import React, {Component} from 'React';
import {NavLink} from 'react-router-dom';
import './main.css';

import LoginRegister from './LoginRegister'

export default class Main extends Component{
    render(){
        return (
            <div>
                {/*中间部分内容*/}
                <div className="Login-main">
                    <div className="Login-login">
                        <div className='Login-account'>
                            <span className="Login-account-zh"><a href="javascript:;">账号登录</a></span> |
                            <span className="Login-account-sm"><a href="javascript:;">扫码登录</a></span>
                        </div>

                        <LoginRegister />

                        <div className="way">
                            <ul className="icon">
                                <li className="icon-i1"><a href="javascript:;"><img src="./img/qq.png"/></a></li>
                                <li className="icon-i2"><a href="javascript:;"><img src="./img/wb.png"/></a></li>
                                <li className="icon-i3"><a href="javascript:;"><img src="./img/wx.png"/></a></li>
                                <div></div>
                            </ul>
                        </div>
                    </div>
                 </div>
                {/*中间部分内容结束*/}
            </div>
        )
    }
}