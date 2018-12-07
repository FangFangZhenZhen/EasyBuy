var _ = require('lodash');
var initalState = [];

function carts(state = initalState, action) {
  switch (action.type) {
    case 'ADDTOCARTS': 
      var pos = _.findIndex(state, { id: action.data.id }); //根据产品id，看看这个产品有没有加入到购物车中
      if (pos !== -1) { // 这个产品已经在购物车中
        state[pos].quantity = state[pos].quantity + 1; // 购物数量+1
        return [...state];
      } else { // 产品从来没加到购物车
        action.data.quantity = 1; //  数量就为1
        return [...state, action.data];
      }
    default: 
      return state;
  }
}

export default carts;
