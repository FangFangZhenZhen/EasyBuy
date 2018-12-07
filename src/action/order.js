import axios from 'axios';
// export const toggle=(e)=>{
//   return {
//     type:'TOGGLE',
//   }
// }
export const getListData = data => {
  return {
    type: 'GETLISTS',
    data
  };
};
export const toggle=()=>{
  return {
    type:"TOGGLE"
  }
}
export const getList=data=>{
  return {
    type:'GETLIST',
    data
  }
}

export function fetchList(orderState) {
  // console.log(props);
    return dispatch => {
      var url = `http://47.92.98.104:8080/YG/order`;
      return axios({
        url   : url+`?orderStatus=${orderState}`,
        method: 'get',
      }).then(res => {
        console.log(res.data);
        dispatch(getListData(res.data));
      });
    };
  }
export function fetchListIn(params = { page: 1}){
  return dispatch => {
    var url = `http://47.92.98.104:8080/YG/order?currentpage=${params.page}`;
    return axios({
      url   : url,
      method: 'get',
    }).then(res => {
      console.log(res.data);
      dispatch(getListData(res.data));
    });
  };
}
export function fetchAll(){
  return dispatch => {
    var url = `http://47.92.98.104:8080/YG/order`;
    return axios({
      url   : url,
      method: 'get',
    }).then(res => {
      console.log(res.data);
      dispatch(getListData(res.data));
    });
  };
}
export function orderDetail(id){
    return dispatch=>{
      var url=`http://47.92.98.104:8080/YG/orderDetails?orderNo=${id}`;
      return axios({
        url:url,
        method:'get'
      }).then(res=>{
        dispatch(getList(res.data));
      })
    }
  }