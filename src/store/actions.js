import types from './type'

// 定义action,由dispatch触发更新数据的动作
export function add() {
  return {type: types.ADD_GUN}
}
export function sub(){
  return {type: types.SUB_GUN}
}
export function addAsync(){
  return (dispatch) => {
    setTimeout(() => {
      dispatch(add())
    }, 1000)
  }
}