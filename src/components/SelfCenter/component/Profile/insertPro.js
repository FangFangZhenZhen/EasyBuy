import React, { Component } from 'react';
import { Modal, Button } from 'antd';
import { Icon } from 'antd';


class InsertPro extends React.Component {
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
      <div className="insertpro defaultpro">
        <Button type="default" onClick={this.showModal}  className="btn2">
            <Icon type="plus-circle"  className="btn1" theme='outlined'/>
        </Button>
        <p>添加新地址</p>
        <Modal
          title="添加收货地址"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <div className="inputmsg1">
            <input placeholder="姓名" />
            <input placeholder="手机号" />
          </div>
          <div className="inputmsg2">
            <textarea placeholder="详细地址(省/市/区/街道+具体地址)"/>
          </div>
          <div className="inputmsg3">
            <input placeholder="邮政编码" />
            <input placeholder="地址标签" />
          </div>
        </Modal>
      </div>
    );
  }
}
export default InsertPro;