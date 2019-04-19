import types from './type'
console.log(types.ADD_GUN)

// reducer，触发更新数据的动作后，根据其type进行更新
export function reducer(state=0, action) {
  console.log(1)
  console.log(action)
  switch (action.type) {
    case types.ADD_GUN:
      return state+1
    case types.SUB_GUN:
      return state-1
    default:
      return 10
  } 
}
