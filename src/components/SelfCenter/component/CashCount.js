//现金账户组件
import React, { Component,Fragment } from 'react';
import CaCardTab from './CashAccount/CaCardTab';
import CaCart from './CashAccount/CaCart';
import axios from 'axios';

export default class CashCount extends Component{
  constructor(props){
    super(props);
    this.state={
      result: []
    }
  }

   render() {
     return (
        <div className="seclect cash-account">
          <CaCart/>
          <CaCardTab />
        </div>
     )
   }
}