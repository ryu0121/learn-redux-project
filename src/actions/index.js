// ACTION CREATER
export const increment = nr => {
  // ACTION
  // 〜したいなぁと宣言すること
  // 具体的にどうやるかを明示するのはREDUCERの責務
  return {
    type: 'INCREMENT',
    payload: nr
  }
}

export const decrement = () => {
  return {
    type: 'DECREMENT'
  }
}

export const signIn = () => {
  return {
    type: 'SIGN_IN'
  }
}