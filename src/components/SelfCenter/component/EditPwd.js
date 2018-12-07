import React, { Component } from 'react';
import axios from 'axios'
export default class EditPwd extends Component{
  constructor(props){
    super(props)
    this.state={
      api:'http://47.92.98.104:8080',
      userId:'1',
      oldPwd:'',
      newPwd:'',
      checkMes:'',
      allTrue:''
    }
  }
  subEdit=()=>{
  var  data={
      userId:this.state.userId,
      oldPwd:this.refs.oldPwd.value,
      newPwd:this.refs.newPwd.value
    }
    // console.log(data)
    if(this.state.allTrue){
      axios({
        method:'get',
        url:`${this.state.api}/YG/userEditPwd`,
        data:data
      }).then(res=>{
        console.log(res)
      })
    }else{
      alert('填写错误')
    }
  }
  checkPwd=()=>{
    var cPwd=this.refs.cPwd.value;
    var pwd=this.refs.newPwd.value;
    if(cPwd===pwd){
      this.setState({
        checkMes:'正确',
        allTrue:true
      })
    }else{
      this.setState({
        checkMes:'密码不一致',
        allTrue:false
      })
    }
    // console.log(this.refs.cPwd.value)
  }
   render() {
     return (
        <div className="editpwd">
            <h2>修改密码</h2>
            <div className="editpwd-div1">
              <label>
                原密码:
              </label>
              <input placeholder="输入原密码" ref="oldPwd"/>
            </div>
            <div className="editpwd-div1">
              <label>
                新密码:
              </label>
              <input placeholder="输入新密码" ref="newPwd"/><br/>
              <input placeholder="重复新密码" className="editpwd-input1" ref="cPwd" onBlur={this.checkPwd}/>
              <span style={{color:'red'}}>{this.state.checkMes}</span>
              <p>密码长度8-16位，数字、字母、字符至少包含两种</p>
            </div>
            {/* <div className="editpwd-div1 editpwd-box1">
              <h5>验证码</h5>
              <div>验证码区域</div>
            </div> */}
            <div className="editpwd-div1">
              <button className="editpwd-btn1" onClick={this.subEdit}>确定</button>
              <button className="editpwd-btn2">取消</button>
            </div>
        </div>
     )
   }
}