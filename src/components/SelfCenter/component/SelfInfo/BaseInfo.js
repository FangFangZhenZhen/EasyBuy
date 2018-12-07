import React, { Component } from 'react';
import { Modal, Button } from 'antd';
export default class BaseInfo extends Component{
    state = { visible: false }

    showModal = () => {
      this.setState({
        visible: true,
      });
    }
  
    handleOk = (e) => {
      console.log(e);
      this.setState({
        visible: false,
      });
    }
  
    handleCancel = (e) => {
      console.log(e);
      this.setState({
        visible: false,
      });
    }
   render() {
     return (
        <div className="baseinfo">
          <h3>
              <span>基础资料</span>
              <Button type="default" onClick={this.showModal} className="btna">
                  编辑
              </Button>
              <Modal
                    title="编辑个人信息"
                    bodyStyle={{width:400,height:200}}
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
               >
                    <p>暂无个人信息</p>
              </Modal>
          </h3>
          <p>姓名：{this.props.name}</p>
          <p>生日：{this.props.birth}</p>
          <p>性别：{this.props.sex===1?'男':'女'}</p>
        </div>
     )
   }
}

