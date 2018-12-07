import React, {Component} from 'React';
import {NavLink} from 'react-router-dom';
import './main.css';


import Register from './Register'
export default class Main extends Component{
        render(){
        return (
            <div>
                {/*中间部分内容*/}
                <Register/>
                {/*中间部分内容结束*/}
            </div>
        )
    }
}

