import * as types from "./actionType";

export const getdata =(data)=>(dispatch)=>{
    dispatch({type:types.GET_RESPONSE,payload:data})
}