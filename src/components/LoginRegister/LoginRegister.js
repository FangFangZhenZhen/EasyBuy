import React,{Component} from 'react';
import {NavLink,withRouter} from 'react-router-dom';
import Agreement from './Agreement'
import store from '../../store'


import { Form, Icon, Input, Button, Checkbox } from 'antd';

const FormItem = Form.Item;

class NormalLoginForm extends React.Component {
  state=store.getState();
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        $.ajax({
          url     : 'http://47.92.98.104:8080/YG/user',
          type    : 'get',
          dataType: 'json',
          data    : {
            uname: values.userName,
            pwd  : values.password,
          },
          success:data=>{
            if(data!==null){
              this.state.loginStatus=true
              const action = {
                type:'changeUserName',
                replace:data.uname,
                loginName:'',
                registerName:''
              };
              store.dispatch(action);
              this.props.history.push('/');
              sessionStorage.setItem('replace',data.uname)
              sessionStorage.setItem('loginName','')
              sessionStorage.setItem('register','')
              sessionStorage.setItem('loginStatus',this.state.loginStatus)
              alert("登录成功！");
            }else{
              alert('信息错误！请重新输入!')
              return  false;
            }
          },
        })
        // this.props.history.push('/')
      }else{
        alert('信息错误！请重新输入!')
        return  false;
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form" style={{width:'330px',marginLeft:'38px' }}>
        <FormItem>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: '请输入你的用户名!' }],
          })(
            <Input prefix={<Icon type="user" style    = {{ color: 'rgba(0,0,0,.25)' }} />} placeholder = "邮箱/手机号/易购账号" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: '请输入你的密码' }],
          })(
            <Input prefix={<Icon type="lock"  style    = {{ color: 'rgba(0,0,0,.25)'}} />} type = "password" placeholder = "密码"  />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue : true,
          })(
            <Checkbox style={{marginLeft:'10px'}}>我以阅读并同意</Checkbox>
          )}
          <NavLink className="login-form-forgot" to='/loginregister/agreement'>《易购》</NavLink>
          <a href="" style={{marginLeft:'10px'}}>忘记密码</a>
          <a href="">/注册密码</a>

          <Button type="primary" htmlType="submit" className="login-form-button"
           style = {{width:'307px',marginLeft:'10px',marginTop:'20px'}}
           >
            提交
          </Button>
        </FormItem>
      </Form>
    );
  }
}

const WrappedNormalLoginForm = Form.create()(NormalLoginForm);
export default withRouter(WrappedNormalLoginForm);