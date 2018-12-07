//我的订单组件
import React, { Component } from 'react';
import Order from '../../Order/index';
export default class MyOrder extends Component{
   render() {
     return (
        <div className="seclect">
          <Order />
        </div>
     )
   }
}