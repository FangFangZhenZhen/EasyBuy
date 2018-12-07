import React, { Component } from 'react';
export default class AccountDetail extends Component{
   render() {
     console.log(this.props);
     return (
        <div className="account">
          <div className=" label1">
            <label className='acount-label'>账户安全:</label>
            {this.props.account===1?'正常':'危险'}
          </div>
          <div className=" label2">
            <label className='acount-label'>绑定手机:</label>
            {this.props.phone}
          </div>
          <div className=" label3">
            <label className='acount-label'>绑定邮箱:</label>
            {this.props.email}
          </div>
          <button>修改</button>
        </div>
     )
   }
};