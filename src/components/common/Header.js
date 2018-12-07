import React from 'react';
import ReactDOM from 'react-dom';
import  Logo  from './Logo'
import {NavLink,withRouter} from 'react-router-dom'
import './reset.css'
import './Header.css'
import store from '../../store'

class Header extends React.Component {
  constructor(props){
    super(props);
    this.state=store.getState();
    this.handleChange = this.handleChange.bind(this)
    store.subscribe(this.handleChange)
  }
  // showName=()=>{
  //   // console.log(this.refs.search.value)
  // }
  render() {
    if(!sessionStorage.getItem('loginStatus')){

    return (
      <div>
        <div className='header-outter'>
          <div className='header'>
            <div className='header-left'>
              <span className='iconfont icon-shouye'>欢迎来到易购！</span>
              <NavLink to='/'>首页</NavLink>
            </div>
            <div className='header-right'>
                <NavLink to=''>{this.state.replace}</NavLink>
                <NavLink to='/loginregister'>{this.state.loginName}</NavLink>
                <NavLink to='/register'>{this.state.registerName}</NavLink>|
                <NavLink to='/shopcart' className='iconfont icon-gouwuche'> 购物车</NavLink>|
                <NavLink to='/selfcenter' className='iconfont icon-icongerenzhongxin'>个人中心</NavLink>|
                <NavLink to='/helpcenter' className='iconfont icon-bangzhu'>帮助中心</NavLink>
            </div>
          </div>
        </div>
        {/*头部logo和搜索部分*/}

      </div>
    );
  }else{
    return (
      <div>
        <div className='header-outter'>
          <div className='header'>
            <div className='header-left'>
              <span className='iconfont icon-shouye'>欢迎来到易购！</span>
              <NavLink to='/'>首页</NavLink>
            </div>
            <div className='header-right'>
                <NavLink to=''>{sessionStorage.getItem('replace')}</NavLink>
                <NavLink to='/loginregister'>{sessionStorage.getItem('loginName')}</NavLink>
                <NavLink to='/register'>{sessionStorage.getItem('registerName')}</NavLink>|
                <NavLink to='/shopcart' className='iconfont icon-gouwuche'> 购物车</NavLink>|
                <NavLink to='/selfcenter' className='iconfont icon-icongerenzhongxin'>个人中心</NavLink>|
                <NavLink to='/helpcenter' className='iconfont icon-bangzhu'>帮助中心</NavLink>
            </div>
          </div>
        </div>
        {/*头部logo和搜索部分*/}

      </div>
    );
  }
  }
  handleChange(){
    this.setState(store.getState())
  }
}
export default withRouter(Header)