import React, {Component,Fragment} from 'React';
import './index.css';
import axios from 'axios';
import LazyLoad from 'react-lazyload'
import {NavLink} from 'react-router-dom'
import SliderItem from './SliderItem';
import Item from '../../../node_modules/antd/lib/list/Item';
export default class Slider extends Component{
    constructor(props){
        super(props)
        this.state={
            pic:[]
        }
    }
    componentDidMount(){
            axios({
            'url':'http://47.92.98.104:8080/YG/index',
            method:'get'
        }).then(res=>{
            this.setState({
                pic:[...res.data[0]]
            })
        })
        var swiper = new Swiper('.swiper-container', {
            autoplay:{
                delay:3000,
                disableOnInteraction: false,
            },
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
            }
          });
        var comtainer = document.getElementById('swiper_container');
        comtainer.onmouseenter = function () {
            swiper.autoplay.stop();
        };
        comtainer.onmouseleave = function () {
            swiper.autoplay.start();
        }

    }

    showPic(){
        return this.state.pic.map((item,index)=>{
            return (
                <Fragment key={this.state.pic[index].id}>
                <SliderItem
                    pic={this.state.pic[index].path}
                />
                </Fragment>
            )
        })
    }

    render(){
        return(
            <Fragment>
                <div className="swiper-container" id="swiper_container">
                    <div className="swiper-wrapper">
                        {this.showPic()}
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            </Fragment>
        )
    }
}
