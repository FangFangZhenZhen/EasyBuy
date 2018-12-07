import React, {Component,Fragment} from 'React';
import { NavLink } from 'react-router-dom'
export default class GoodsListItem extends Component{
    render(){
        return(
            <Fragment>
                <NavLink to='/prodetails' className='item'>
                    <img src={'http://47.92.98.104:8080/YG/img/'+this.props.pic}/>
                    <span>{this.props.title}</span>
                </NavLink>
            </Fragment>
        )
    }
}