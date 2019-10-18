import * as types from './types'
export default {
    [types.VIEW_HEADER] : ({state,commit},payload)=>{
        commit(types.VIEW_HEADER,payload);
    },
    [types.VIEW_FOOTER] : ({state,commit},payload)=>{
        commit(types.VIEW_FOOTER,payload);
    },
    [types.UPDATE_HOME] : ({state,commit})=>{
        axios({
            url : '/api/home',
            method : 'get'
        }).then(
            // res=>this.listData = res.data.data
            res=>commit(types.UPDATE_HOME,res.data.data)
        )
        // commit(types.UPDATE_HOME,payload);
    },
    [types.CHECK_USER]:({state,commit},payload)=>{
       return axios({
          url:'/api/login',
          method:'post',
          data:{
            username:payload.username,
            password:payload.password,
            save:true
          }
        }).then(
          res=>{
            commit(types.CHECK_USER,res.data);
            localStorage.setItem('user',JSON.stringify(res.data));
            return {
              mess:res.data.msg,
              err:res.data.err
            }
          }
        )
    },
    [types.CHECK_REG] : ({state,commit},{username,password,nickname})=>{
        return axios({
            url : '/api/reg',
            method : 'post',
            data : {
                username,password,nickname
            }
        }).then(
            res=>{
                commit(types.CHECK_REG,res.data);
                return {
                    mess : res.data.msg,
                    err : res.data.err
                }
            }
        )
    },
    [types.UPDATE_DETAIL] : ({state,commit},{dataName,id})=>{
        axios({
            url : `/api/${dataName}/${id}`
        }).then(
            res=>commit(types.UPDATE_DETAIL,res.data.data)
        )
    },
    [types.UPDATE_COLUMN] : ({state,commit},payload)=>{
        axios({
            url : '/api/column'
        }).then(
            res=>commit(types.UPDATE_COLUMN,res.data.data)
        )
    },
    [types.UPDATE_BOOK] : ({state,commit},payload)=>{
       return axios({
            url : '/api/column',
            method : 'put',
            data : payload
        }).then(
            res=>{
                commit(types.UPDATE_BOOK,res.data);
                return {
                    err : res.data.err
                }
            }
        )
    }
   
}