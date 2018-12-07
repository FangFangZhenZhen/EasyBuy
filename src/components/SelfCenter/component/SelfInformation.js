//个人信息组件
import React, { Component ,Fragment } from 'react';
import TouXiang from './SelfInfo/TouXiang';
import BaseInfo from './SelfInfo/BaseInfo';
import Advanced from './SelfInfo/Advanced';
import axios from 'axios';

export default class SelfInformation extends Component{
  constructor(props){
    super(props);
    this.state={
      result: []
    } 
  }

  componentWillMount(){
    axios({
       "url":"http://47.92.98.104:8080/YG/showme",
       "method":"get"
    }).then(res=>{
     
     this.setState({
       result: [...res.data]
     })
    //  console.log(this.state.result[0])
    })
  }
 
    selfimg(){
      if(this.state.result[0]!=undefined){
        // console.log(this.state.result[0])
        return (
          <Fragment>
            <TouXiang 
              logo={this.state.result[0].photo}
            />
          </Fragment>
        )
      }
    }
    selfbase(){
      if(this.state.result[0]!=undefined){
        // console.log(this.state.result[0])
        return (
          <Fragment>
            <BaseInfo 
            name={this.state.result[0].uname}
            birth={this.state.result[0].birthday}
            sex={this.state.result[0].gender}
            />
          </Fragment>
        )
      }
    }
    selfadvance(){
      if(this.state.result[0]!=undefined){
        // console.log(this.state.result[0])
        return (
          <Fragment>
            <Advanced 
               cashcard={this.state.result[0].bank_card}
               states={this.state.result[0].address}
            />
          </Fragment>
        )
      }
    }
  
   render() {
     return (
        <div className="seclect self-info">
              {this.selfimg()}
          <div className="self-setup">
             {this.selfbase()}
             {this.selfadvance()}            
          </div>
        </div>
     )
   }
}


