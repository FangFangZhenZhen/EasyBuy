import React, { Component } from 'react';
import { Pagination } from 'antd';
export default class PageSave extends Component{
   render() {
     return (
        <Pagination defaultCurrent={6} total={500} />
     )
   }
}

