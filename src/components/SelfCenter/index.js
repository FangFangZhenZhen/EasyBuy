//用户中心外围组件
import React , { Component } from 'react';
import style from './SelfCenter.css';
import Navgator from './Navgator';
import {NavLink} from 'react-router-dom'

//用户中心对象引入
import {
    Tab,
    CashCount,
    EditPwd,
    ManCenter,
    MyOrder,
    MySave,
    ProFile,
    SelfInformation,
} from './component/index';
import Logo from '../common/Logo';
import store from '../../store'



//引入路由对象
import {Route, Switch} from 'react-router-dom';


//路由操作
export default class SelfCenter extends Component{
    state=store.getState()
    render(){
        if(this.state.loginStatus){
        return (
            <div className="selfuser-out">
                <Logo />
                <Navgator />
                <div className="selfuser">
                    <Tab />
                    <Switch>
                        {/* <Route path="/selfcenter" component = {Home} exact /> */}
                        <Route path="/selfcenter" component = {MyOrder} exact />
                        <Route path="/selfcenter/my-save/:shop1/:shop2" component = {MySave} />
                        <Route path="/selfcenter/man-center" component = {ManCenter} />
                        <Route path="/selfcenter/cash-count" component = {CashCount} />
                        <Route path="/selfcenter/profile" component = {ProFile} />
                        <Route path="/selfcenter/self-information" component = {SelfInformation} />
                        <Route path="/selfcenter/edit-pwd" component = {EditPwd} />
                    </Switch>
                </div>
            </div>
        )
        }else{
            return (
                <h3 className='checkLoginMsg'>您还没有<NavLink to='/loginregister'>登录</NavLink>哦!!</h3>
            )
        }
    }
}