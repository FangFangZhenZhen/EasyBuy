import React, {Component,Fragment} from 'React';
import Pic from './components/Pic';
import Details from './components/Details';
import Promise from './components/Promise'
import Appraise from './components/Appraise'
import store from './store';
import Search from '../common/Logo';
import style from './css/ProDetails.css'
export default class details extends Component{
    render(){
        return(
            <Fragment>
                <Search/>
                <div className='ProDetails'>
                    <Pic/>
                    <Details/>
                </div>
                <Promise/>
                <Appraise/>
            </Fragment>
        )
    }
}