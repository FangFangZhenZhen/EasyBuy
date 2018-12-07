import React, {Component,Fragment} from 'React';
import {NavLink} from 'react-router-dom';

export default class GoodsItem extends Component{
    render(){
        // console.log(this.props)
        return(
            <Fragment>
                <div className='goods-item'>
                    <NavLink to='/prodetails' className='item'></NavLink>
                    <div className='goods-pic'>
                        <img src={'http://47.92.98.104:8080/YG/img/'+this.props.pic}/>
                    </div>
                    <h4>{this.props.title}</h4>
                    <span>￥ {this.props.price}</span>
                </div>
            </Fragment>
        )
    }
}