import React, { Component } from 'react';
import { Card } from 'antd';

const { Meta } = Card;

export default class ShopDetail extends Component{
   render() {
    //    console.log(this.props)
     return (
        <div className="shop-details">
            <Card
                hoverable
                style={{ width: 245 ,height:338,marginBottom:37,marginLeft:22 }}
                cover={<img alt="example" src={'http://47.92.98.104:8080/YG/img/'+this.props.img} style={{height:231}}/>}
            >
                <Meta
                title={this.props.title}
                description={'￥'+this.props.money}
                style={{textAlign:"center"}}
                />
                <p className="sdp">
                    <span>10000人评价</span>
                    <span>好评率：98%</span>
                </p>
                <ul className="sdiv">
                    <li>
                        <a>加入购物车</a>
                    </li>
                    <li>
                        <a>对比</a>
                    </li>
                    <li>
                        <a>降价通知</a>
                    </li>
                </ul>
               
            </Card>
        </div>
     )
   }
}
