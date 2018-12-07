import React, { Component } from 'react';
import { Modal, Button } from 'antd';
export default class Advanced extends Component{
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
    //  console.log(this.props);
     return (
        <div className="advance">
          <h3>高级设置</h3>
          <div className="baseinfo">
            <h3>
              <span className="span1">银行卡：{this.props.cashcard}</span>
              <Button type="default" onClick={this.showModal} className="btna">
                  管理
              </Button>
              <Modal
                    title="管理个人信息"
                    bodyStyle={{width:400,height:200}}
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
               >
                    <p>暂无个人信息</p>
              </Modal>
            </h3>
          </div>
          <p>账号地区：{this.props.states}</p>
        </div>
     )
   }
}