import React from 'React';
import ReactDOM from 'react-dom';
import {HashRouter as Router,Route,Switch} from 'react-router-dom';
import {
    Indexpages,
    LoginRegister,
    Order,
    SelfCenter,
    ShopCart,
    HelpCenter,
    ShowProduct,
    ProDetails,
    Register,
    PayPage
} from './components'
import { Provider } from 'react-redux';
import store from './store';
import Header from './components/common/Header'
import Footer from './components/common/Footer'
ReactDOM.render(
    <Provider store={store}>
    <Router>
        <div>
         <Header />
                <Switch>
                    <Route path='/' component={Indexpages} exact/>
                    <Route path='/loginregister' component={LoginRegister}/>
                    <Route path='/register' component={Register}/>
                    <Route path='/order' component={Order}/>
                    <Route path='/selfcenter' component={SelfCenter}/>
                    <Route path='/shopcart' component={ShopCart}/>
                    <Route path='/helpcenter' component={HelpCenter}/>
                    <Route path='/showproduct' component={ShowProduct}/>
                    <Route path='/prodetails' component={ProDetails}/>
                    <Route path='/paypage' component={PayPage}/>
                </Switch>
        <Footer />
        </div>
    </Router>
    </Provider>
    ,document.getElementById('app'));