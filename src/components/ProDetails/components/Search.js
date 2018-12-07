import React, {Component} from 'React';
import { Row, Col } from 'antd';
import {NavLink} from 'react-router-dom'
import './index.css'
export default class Logo extends Component{
    render(){
        return (
            <div>
                {/*头部logo和搜索部分开始*/}
                <div className='logo-search'>
                    <div className='ls-inner'>
                        <Row>
                            <Col span={18} push={6}>
                                <div className='search-box'>
                                    <input type='text' />
                                    <button>搜索</button>
                                </div>
                                <div className='recommend'>
                                    <NavLink to='/showproduct'>针织衫</NavLink>|
                                    <NavLink to='/showproduct'>连衣裙</NavLink>|
                                    <NavLink to='/showproduct'>四件套</NavLink>|
                                    <NavLink to='/showproduct'>摄像头</NavLink>|
                                    <NavLink to='/showproduct'>客厅灯</NavLink>|
                                    <NavLink to='/showproduct'>口红</NavLink>|
                                    <NavLink to='/showproduct'>小米手机</NavLink>|
                                    <NavLink to='/showproduct'>运动鞋</NavLink>
                                </div>
                            </Col>
                            <Col span={6} pull={18}>
                                <NavLink to='/'>
                                    <img src='./public/indexHeader/img/index-logo.png' />
                                </NavLink>
                            </Col>
                        </Row>
                    </div>
                </div>
                {/*头部logo和搜索部分结束*/}
            </div>
        )
    }
}