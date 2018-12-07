import React, {Component} from 'React';
import './index.css'
export default class GuessTitle extends Component{
    render(){
        return(
            <div>
                <div className='guess-title'>
                    <img src='./public/indexHeader/img/heart.png' />
                    <span>猜你喜欢</span>
                    <div className='left-line'></div>
                    <div className='right-line'></div>
                </div>
            </div>
        )
    }
}