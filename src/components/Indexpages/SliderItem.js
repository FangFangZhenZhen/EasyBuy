import React, {Component,Fragment} from 'React';
import {NavLink} from 'react-router-dom'
export default class SliderItem extends Component{
    render(){
        return(
            <Fragment>
            <div className="swiper-slide">
                <NavLink to='/prodetails'>
                    <img src={'http://47.92.98.104:8080/YG/img/'+this.props.pic}/>
                </NavLink>
            </div>
            </Fragment>
        )
    }
}