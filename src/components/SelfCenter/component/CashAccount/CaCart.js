import React, { Component } from 'react';
export default class CaCart extends Component{
   render() {
    //  console.log(this.props);
     return (
        <div className="cacart">
            <div className="catopleft">
              <h3>我的可用余额:￥ 11892.00</h3>
              <a>充值</a>
              <a>历史充值记录</a>
            </div>
            <ul className="catopright">
              <li>全部余额:￥ 11892.00</li>
              <li>锁定余额:￥ 50000.00</li>
              <li>账户状态:安全</li>
            </ul>
        </div>
     )
   }
}