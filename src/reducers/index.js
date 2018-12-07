const defaultValue = {
    loginStatus:false,
    loginName:'登录',
    registerName:'注册'
}

export default (state=defaultValue,action)=>{

    if(action.type==='changeStatus'){
        const newState = JSON.parse(JSON.stringify(state));
        newState.loginStatus=true;
        return newState
    }

    return state
}