import axios from 'axios'

export function fetchList( params ={ page:1 }){
    return dispatch=>{
        var url = `http://localhost:3000/people?_page=${params.page}&_limit=25`;
            return axios({
                url   : url,
                method: 'get',
            }).then(res=>{
                console.log(res.data);
                dispatch(getListData(res.data))
            })
        }
}