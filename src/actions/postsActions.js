import axios from 'axios'
import { handleAsync } from '../utils'
import { postTypes } from './types'

async function getPostsRequest () {
  return await axios.get('https://jsonplaceholder.typicode.com/posts')
}

export function getPosts () {
  return async function get (dispatch) {
    dispatch({ type: postTypes.LOADING_POSTS })
    const [res, err] = await handleAsync(getPostsRequest)

    if (err) {
      dispatch({ type: postTypes.ERROR_POSTS, payload: err })
    } else {
      dispatch({ type: postTypes.SUCCESS_POSTS, payload: res.data })
    }
  }
}
