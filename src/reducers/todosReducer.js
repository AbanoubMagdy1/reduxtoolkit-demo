import { createReducer } from '@reduxjs/toolkit'
import { todoTypes } from '../actions/types'

const todosReducer = createReducer({ loading: false }, (builder) => {
  builder
    .addCase(todoTypes.LOADING_TODOS, (state, action) => {
      state.loading = true
      state.data = null
    })

    .addCase(todoTypes.SUCCESS_TODOS, (state, action) => {
      state.loading = false
      state.data = action.payload
    })
    .addCase(todoTypes.ERROR_TODOS, (state, action) => {
      // Can still return an immutably-updated value if we want to
      state.error = action.payload
      state.loading = false
    })
})

export default todosReducer
