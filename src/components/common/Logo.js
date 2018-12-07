import React, {Component} from 'React';
import {NavLink,withRouter} from 'react-router-dom';
import './Header.css'
 class Logo extends Component{
     constructor(props){
         super(props);
         this.searchGoodsByEnter=this.searchGoodsByEnter.bind(this)
         this.searchGoodsByClick=this.searchGoodsByClick.bind(this)
     }
    searchGoodsByEnter(e){
        if(e.keyCode==13){
            var id = this.refs.search.value;
            this.props.history.push(`/showproduct/${id}`)
        }
    }
    searchGoodsByClick(){
        var id = this.refs.search.value;
        this.props.history.push(`/showproduct/${id}`)
    }
    render(){
        return (
            <div>
                {/*头部logo和搜索部分开始*/}
                <div className='logo-search'>
                    <div className='ls-inner'>
                        <div className='logo'>
                            <NavLink to='/'>
                                <img src='./public/indexHeader/img/index-logo.png' />
                            </NavLink>
                        </div>

                        <div className='search-box'>
                            <input type='text' ref='search' onKeyUp={this.searchGoodsByEnter}/>
                            <button onClick={this.searchGoodsByClick}>搜索</button>
                        </div>
                        <div className='recommend'>
                            <NavLink to='/showproduct'>针织衫</NavLink>|
                            <NavLink to='/showproduct'>连衣裙</NavLink>|
                            <NavLink to='/showproduct'>四件套</NavLink>|
                            <NavLink to='/showproduct'>摄像头</NavLink>|
                            <NavLink to='/showproduct'>客厅灯</NavLink>|
                            <NavLink to='/showproduct'>口红</NavLink>|
                            <NavLink to='/showproduct'>小米手机</NavLink>|
                            <NavLink to='/showproduct'>运动鞋</NavLink>
                        </div>

                    </div>
                </div>
                {/*头部logo和搜索部分结束*/}
            </div>
        )
    }

}

export default withRouter(Logo)