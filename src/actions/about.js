/**
 * Created by zhangsai on 2017/2/6.
 */
import * as Const from "../constants";
function receiveList(data){
  return{
    type:Const.GET_LIST,
    payload:data
  }
}

export function getList(){
  return dispatch => {
    let data = [{name:"zhangsan"},{name:"lisi"}];
    dispatch(receiveList(data))
  }
}
