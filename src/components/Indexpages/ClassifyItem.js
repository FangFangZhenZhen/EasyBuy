import React, {Component,Fragment} from 'React';
import {NavLink} from 'react-router-dom';
import axios from 'axios'
export default class ClassifyItem extends Component{

    showProductCategory(){
        return this.props.items.map((item,index)=>{
            return (
                <Fragment key={index}>
                    <NavLink to='/showproduct'>{this.props.items[index].cname}</NavLink>
                </Fragment>
            )
        })
    }

    render(){
        return(
            <Fragment>
                <div className='classify-item'>
                    <div className='left_title'>
                        {this.props.title}<span>></span>
                    </div>
                    <div className='right-content'>{this.showProductCategory()}</div>
                </div>
            </Fragment>
        )
    }
}