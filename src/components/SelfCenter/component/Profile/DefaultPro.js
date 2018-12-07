import React, { Component } from 'react';
export default class DefaultPro extends Component{
   render() {
    //    console.log(this.props);
     return (
        <div className="defaultpro">           
            <h4>{this.props.name}</h4>
            <p>{this.props.phone}</p>
            <p> {this.props.state}
                {this.props.city}
                {this.props.district}
                {this.props.address}
            </p>
        </div>
     )
   }
}