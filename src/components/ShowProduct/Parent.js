import React, {Component} from 'React';
import Nav from './Nav';
import Filter from './Filter';
import Product from './Product';

export default class Parent extends Component {
    constructor() {
        super()
        this.state = {
            info: [],
        }
    }
    // 多选-匹配
    handleChange(con){
        if(this.state.info.indexOf(con)){
            this.state.info.push(con);
        }
        this.setState({info: this.state.info[this.state.info.length-1]},function(){
            this.props.history.push(`/showProduct/${this.props.match.params.id}/${this.props.match.params.brand}/${this.props.match.params.classify}/${this.props.match.params.sortGoods}/${this.state.info}`);
        })
        console.log(this.props)
    }

    render() {
        return (
            <div>
                <Nav
                id        = {this.props.match.params.id}
                brand     = {this.props.match.params.brand}
                classify  = {this.props.match.params.classify}
                sortGoods = {this.props.match.params.sortGoods}
                check     = {this.props.match.params.check}
                />

                <Filter
                history   = {this.props.history}
                id        = {this.props.match.params.id}
                brand     = {this.props.match.params.brand}
                classify  = {this.props.match.params.classify}
                sortGoods = {this.props.match.params.sortGoods}
                check     = {this.props.match.params.check}
                onChange  = { this.handleChange.bind(this)}
                />

                <div className="product_box" list={this.state.info}>
                    <Product
                    id        = {this.props.match.params.id}
                    brand     = {this.props.match.params.brand}
                    classify  = {this.props.match.params.classify}
                    sortGoods = {this.props.match.params.sortGoods}
                    check     = {this.props.match.params.check}
                    />

        </div>
            </div>
        )
    }
}