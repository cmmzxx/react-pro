import types from './type'

// reducer，触发更新数据的动作后，根据其type进行更新
// 描述了如何把state变成下一个state
export function reducer(state=0, action) {
  switch (action.type) {
    case types.ADD_GUN:
      return state+1
    case types.SUB_GUN:
      return state-1
    default:
      return 10
  } 
}

