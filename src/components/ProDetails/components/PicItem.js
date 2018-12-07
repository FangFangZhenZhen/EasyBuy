import React ,{Component,Fragment} from 'react' ; 
// import {withRouter} from 'react-router-dom'
export default class PicItem extends Component {
    render(){
          return (
              <Fragment>
              <li><img src={this.props.img}/></li>
              </Fragment>
     )
   }
}
