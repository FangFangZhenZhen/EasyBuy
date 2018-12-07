import React, {Component} from 'React';
import HelpTop from './HelpTop'
import Tatagory from './Tategory'
import axios from 'axios'
import style from './index.css'
export default class helpcenter extends Component{
    constructor(props){
        super(props)
        this.state={
            api    : "http://localhost:3000",
            getdata: []
        }
    }
    getdata1=()=>{
        axios({
            method: 'get',
            url   : `${this.state.api}/account`,
          }).then(res=>{
              this.setState({
                getdata: res.data.account2
              })
          });
    }
    getdata2=()=>{
        axios({
            method: 'get',
            url   : `${this.state.api}/account`,
          }).then(res=>{
              this.setState({
                getdata: res.data.account6
              })
          });
    }
    getdata3=()=>{
        axios({
            method: 'get',
            url   : `${this.state.api}/account`,
          }).then(res=>{
              this.setState({
                getdata: res.data.account3
              })
          });
    }
    getdata4=()=>{
        axios({
            method: 'get',
            url   : `${this.state.api}/activity`,
          }).then(res=>{
              this.setState({
                getdata: res.data.activity1
              })
          });
    }
    render(){
        return(
            <div className="helpcenter">

            <HelpTop/>
            <div style={{position:"absolute",top:'190px',left:"35%"}}>
                <ul className="helpCenter_dataUl">
                    <li onClick={this.getdata1} >注册账户</li>
                    <li onClick={this.getdata2} >个人资料修改</li>
                    <li onClick={this.getdata3} >忘记密码</li>
                    <li onClick={this.getdata4} >2018年双十一大促</li>
                </ul>
            </div>
           <Tatagory  condata={this.state.getdata}/>
            </div>
        )
    }
}