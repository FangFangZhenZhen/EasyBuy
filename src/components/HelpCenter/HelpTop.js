import React, {Component} from 'React';
import {Swtich, Route, Router, HashHistory, Link,NavLink} from 'react-router-dom';
import style from './helpcenter.css'
import { Input,Icon } from 'antd';
import axios from 'axios'
const Search = Input.Search;
export default class HelpTop extends Component{
    constructor(props){
        super(props)
        this.state={}
    }

    searchque=(value)=>{
        console.log(value);
    }
    render(){
        return(
            <div className="helpCenter_helptop">
                <div className="helpCenter_topbox">
                    <div className="helpCenter_topbox_left">
                   <Link to="/"> <img className="helpCenter_logo" src='../../../public/HelpCenter/images/logo.png'></img></Link>
                    <span className="helpCenter_title">帮助中心</span>
                    </div>
                    <div className="helpCenter_topbox_right">
                    </div>
                    <div>
                    {/* 搜索框 */}
                    <Search
                    prefix      = {<Icon type="search" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    className   = "helpCenter_searchbox"
                    placeholder = "亲，您遇到什么问题啦？"
                    enterButton = "搜索"
                    size        = "large"
                    onSearch = {this.searchque}
    />
                        </div>
                </div>

            </div>
        )
    }
}