var initialState={
    loginStatus:false,
    loginName:'登录',
    registerName:'注册',
    replace:'',
    lists:[],
    list:[],
    modal: false,
    orderState:0,
    chose:0
};
function order(state=initialState,action){
    switch(action.type){
        case 'GETLISTS':
            return { ...state, lists: action.data };
        case 'GETLIST':
            return {...state,list:action.data,modal:!state.modal};
        case 'TOGGLE':
            return {...state,modal:!state.modal}
        // case 'ADDPAGE':
        //     return {...state,page:state.page+1}
        // case 'REPAGE':
        //     return {...state,page:state.page-1}
        case 'changeUserName':
            return {...state,replace:action.replace,loginName:action.loginName,registerName:action.registerName}
        default:
            return state;
    }
}
export default order;