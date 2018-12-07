//收货地址组件
import React, { Component,Fragment } from 'react';
import DefaultPro from './Profile/DefaultPro';
import InsertPro from './Profile/insertPro';
import axios from 'axios';
export default class ProFile extends Component{
  constructor(props){
    super(props);
    this.state={
      list:[]
    }
  }

  componentWillMount(){
    axios({
      "url":"http://47.92.98.104:8080/YG/receiver",
      "method":"get"
    }).then(res=>{
      this.setState({
        list:[...res.data]
      })
      // console.log(...res.data);
    })
  }
  show(){
    if(this.state.list.length>0){
      return this.state.list.map((item,index)=>{
        return(
          <Fragment key={index}>
              <DefaultPro
                name={this.state.list[index].receiverName}
                phone={this.state.list[index].receiverPhone}
                state={this.state.list[index].receiverState}
                city={this.state.list[index].receiverCity}
                district={this.state.list[index].receiverDistrict}
                address={this.state.list[index].receiverAddress}
              />
          </Fragment>
        )
      })
    }
  }
   render() {
     return (
        <div className="seclect profile">
            <h2>收货地址</h2>
            <div className="probox">
              {this.show()}
              <InsertPro /> 
            </div>
        </div>
     )
   }
}