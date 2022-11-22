import axios from 'axios'
import { handleAsync } from '../utils'
import { todoTypes } from './types'

async function getTodosRequest () {
  return await axios.get('https://jsonplaceholder.typicode.com/todos')
}

export function getTodos () {
  return async function get (dispatch) {
    dispatch({ type: todoTypes.LOADING_TODOS })
    const [res, err] = await handleAsync(getTodosRequest)

    if (err) {
      dispatch({ type: todoTypes.ERROR_TODOS, payload: err })
    } else {
      dispatch({ type: todoTypes.SUCCESS_TODOS, payload: res.data })
    }
  }
}
