import React,{Component} from 'react'
import { Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete } from 'antd';

import {NavLink,withRouter} from 'react-router-dom'
import './main.css';
import axios from "axios";

const FormItem           = Form.Item;
const Option             = Select.Option;
const AutoCompleteOption = AutoComplete.Option;



class RegistrationForm extends React.Component {
  // constructor(props){
  //   super (props)
  //   this.state ={
  //     a: '',
  //     b: '',
  //     c: '',
  //     d: ''
  //   }
  // }
  componentWillMount(){

  }
  // pentent=(e)=>{
  //   //console.log(this.state)
  //   axios({
  //       url   : `http://47.92.98.104:8080/YG/user`,
  //       method: 'post',
  //       data  : {
  //          "nickname": this.state.a,
  //          "email"   : this.state.b,
  //          "password": this.state.c,
  //          "confirm" : this.state.d
  //       }
  //   }).then(res=>{
  //     console.log(res)
  //   })

  //  }

  state = {
    confirmDirty      : false,
    autoCompleteResult: [],
  };

  handleSubmit = (e) => {
    e.preventDefault();


    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {

      $.ajax({
        url     : "http://47.92.98.104:8080/YG/user",
        type    : 'post',
        dataType: 'json',
        data    : {
          uname   : values.uname,
          email   : values.email,
          password: values.password,
        },
        success:function(data){
          console.log(data)
        },
        error:function(err){
          console.log(err)
        }
      })
         this.props.history.push('/')
      }else{
        alert('信息错误！请重新输入!')
        return  false;
      }
    });



  handleConfirmBlur = (e) => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  }

  compareToFirstPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback('请两遍密码保持一致!');
    } else {
      callback();
    }
  }

  validateToNextPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  }

  handleWebsiteChange = (value) => {
    let autoCompleteResult;
    if (!value) {
      autoCompleteResult = [];
    } else {
      autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`);
    }
    this.setState({ autoCompleteResult });
  }

  render() {
    const { getFieldDecorator }  = this.props.form;
    const { autoCompleteResult } = this.state;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span  : 24,
          offset: 0,
        },
        sm: {
          span  : 16,
          offset: 8,
        },
      },
    };
    const prefixSelector = getFieldDecorator('prefix', {
      initialValue: '86',
    })(
      <Select style={{ width: 70 }}>
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    );


if(autoCompleteResult !== undefined){
      const websiteOptions = autoCompleteResult.map(website => (
      <AutoCompleteOption key={website}>{website}</AutoCompleteOption>
    ));
  }

    return (
      <Form onSubmit={this.handleSubmit}>
      <FormItem
      {...formItemLayout}
      label={(
        <span>
          用户名&nbsp;
          <Tooltip title="What do you want others to call you?">
            <Icon type="question-circle-o" />
          </Tooltip>
        </span>
      )}
    >
      {getFieldDecorator('uname', {
        rules: [{ required: true, message: '请输入你的用户名!', whitespace: true }],
      })(
        <Input
          //onChange = {this.handleChange.bind(this)}
         // ref = "add"
         />
      )}
    </FormItem>

        <FormItem
          {...formItemLayout}
          label = "邮箱"
        >
          {getFieldDecorator('email', {
            rules: [{
              type: 'email', message: '请输入正确格式的e-mail!',
            }, {
              required: true, message: '请输入你的e-mail!',
            }],
          })(
            <Input
             //onChange = {this.handleChanges.bind(this)}
            />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label = "密码"
        >
          {getFieldDecorator('password', {
            rules: [{
              required: true, message: '请输入密码!',
            }, {
              validator: this.validateToNextPassword,
            }],
          })(
            <Input type="password"
           //onChange = {this.ccc.bind(this)}
            />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label = "重复密码"
        >
          {getFieldDecorator('confirm', {
            rules: [{
              required: true, message: '请再次输入密码!',
            }, {
              validator: this.compareToFirstPassword,
            }],
          })(
            <Input type="password" onBlur={this.handleConfirmBlur}
            // onChange = {this.ddd.bind(this)}
            />
          )}
        </FormItem>






        <FormItem {...tailFormItemLayout}>
          {getFieldDecorator('men', {
            valuePropName: 'checked',
          })(

            <Checkbox style={{display:'block',marginLeft:'8px'}}>订阅优惠信息</Checkbox>
          )}
          {getFieldDecorator('agreement', {
            valuePropName: 'checked',
          })(

            <Checkbox>我已阅读并同意 <a href="">《易购网站使用条款》</a></Checkbox>
          )}
        </FormItem>
        <FormItem {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit" id="reg-button"
          //onClick={this.pentent}
          >提交</Button>
        </FormItem>
      </Form>
    );
  }
}

const WrappedRegistrationForm = Form.create()(RegistrationForm);

export default withRouter(WrappedRegistrationForm);