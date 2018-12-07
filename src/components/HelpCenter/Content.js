import React, {Component} from 'React';
import {Swtich, Route, Router, HashHistory, Link,NavLink} from 'react-router-dom';
export default class HelpTop extends Component{
    constructor(props){
        super(props)
        this.state={
            getcontent: '',

    }
}

    render(){
        return(
            <div className="contentBox">
                   {this.props.content[0]}
                {
                    this.props.img.map((value,key)=>{
                    return   (
                            <img key={key} src={value} style={{width:"100%",marginTop:"50px"}}></img>
                    )
                    })
                }
            </div>
        )
    }
}