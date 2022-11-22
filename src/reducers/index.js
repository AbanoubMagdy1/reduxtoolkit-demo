import { combineReducers } from '@reduxjs/toolkit'
import todosReducer from './todosReducer'
import postsReducer from './postsReducer'

export default combineReducers({
  todos: todosReducer,
  posts: postsReducer
})
