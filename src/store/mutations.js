import * as types from './types'
export default {
    [types.VIEW_HEADER] : (state,payload)=>state.bSearch = payload,
    [types.VIEW_FOOTER] : (state,payload)=>state.bFooter = payload,
    [types.UPDATE_HOME] : (state,payload)=>state.home = payload,
    [types.CHECK_USER] : (state,payload)=>state.user = payload,
    [types.CHECK_REG] : (state,payload)=>state.reg = payload,
    [types.UPDATE_COLUMN] : (state,payload)=>state.columns = payload,
    [types.UPDATE_DETAIL] : (state,payload)=>state.detail = payload,
    [types.UPDATE_BOOK] : (state,payload)=>state.column = payload
}