import React, {Component} from 'React';
import Logo from '../common/Logo';
import Nav from './Nav';
import axios from 'axios'
import Parent from './Parent';
import './index.css';
import {Route} from 'react-router-dom';
import Product from './Product';

export default class showList extends Component{

    render(){
        return(
            <div style={{'background':'#fff'}}>
                <Logo />
                <Route path='/showproduct' component={Parent}></Route>
            </div>
        )
    }
}
