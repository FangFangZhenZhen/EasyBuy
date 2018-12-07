import React, {Component} from 'React';
import {NavLink} from 'react-router-dom'
import  ClassifySlider  from './ClassifySlider'
import  NewGoods  from './NewGoods'
import  HotGoods  from './HotGoods'
import  Discount  from './Discount'
import Logo from '../common/Logo'
import  GuessLike  from './GuessLike'

export default class Index extends Component{
    render(){
        return(
            <div>
                <Logo />
                {/*商品分类和轮播部分开始*/}
                <ClassifySlider />
                {/*新品上新部分开始*/}
                <NewGoods />
                {/*热卖商品部分*/}
                <HotGoods />
                {/*促销打折部分*/}
                <Discount />
                {/*广告区域*/}
                <NavLink to='/prodetails' className='index-ad'>
                    <img src='./public/indexHeader/img/index-ad.png' />
                </NavLink>
                {/*猜你喜欢*/}
                <GuessLike />
            </div>
        )
    }
}