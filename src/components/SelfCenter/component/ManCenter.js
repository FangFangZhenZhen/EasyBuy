//个人中心组件
import React, { Component ,Fragment } from 'react';
import UserDetail  from "./ManCenterDetail/UserDetail";
import  AccountDetail  from "./ManCenterDetail/AccountDetail";
import Unpaid  from "./ManCenterDetail/UnPaid";
import Unreceive  from "./ManCenterDetail/Unreceive";
import  Like  from "./ManCenterDetail/Like";
import Uncomment from "./ManCenterDetail/UnComment";
import axios from 'axios';
export default class ManCenter extends Component{
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
      console.log(this.state.result)
     })
   }
   userinfo(){
     if(this.state.result[0]!=undefined){
      // console.log(this.state.result[0])
       return (
       <Fragment >
        <UserDetail
          img={this.state.result[0].photo}
          name={this.state.result[0].uname}
        />
       </Fragment>
     )
     }
    }
    accountinfo(){
      if(this.state.result[0]!=undefined){
        console.log(this.state.result[0])
        return (
          <Fragment>
            <AccountDetail
            account={this.state.result[0].status}
            phone={this.state.result[0].phone}
            email={this.state.result[0].email}
            />
          </Fragment>
        )
      }
    }

   render() {
     return (
        <div className="seclect mancenter">
            <div className="centertop">
                {this.userinfo()}
                {this.accountinfo()}
            </div>
            <ul className="centerbtm">
              <li>

                <Unpaid
                paid={this.state.result[1]}/>
              </li>
              <li>
                <Unreceive
                 receive={this.state.result[2]} />
              </li>
              <li>
                <Uncomment
                 remark={this.state.result[3]}/>
              </li>
              <li>
                <Like
                 like={this.state.result[4]}/>
              </li>
            </ul>
        </div>
     )
   }
}