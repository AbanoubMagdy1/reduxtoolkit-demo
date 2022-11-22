import { createReducer } from '@reduxjs/toolkit'
import { postTypes } from '../actions/types'

const postsReducer = createReducer({ loading: false }, (builder) => {
  builder
    .addCase(postTypes.LOADING_POSTS, (state, action) => {
      state.loading = true
      state.data = null
    })

    .addCase(postTypes.SUCCESS_POSTS, (state, action) => {
      state.loading = false
      state.data = action.payload
      state.fetched = true
    })
    .addCase(postTypes.ERROR_POSTS, (state, action) => {
      // Can still return an immutably-updated value if we want to
      state.error = action.payload
      state.loading = false
    })
})

export default postsReducer
