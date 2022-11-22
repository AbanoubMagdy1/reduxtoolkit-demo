import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getTodos } from '../actions/todosActions'
import LoadErrorHandler from '../components/LoadErrorHandler'

function TodoRoute () {
  const { data, error, loading } = useSelector(state => state.todos)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTodos())
  }, [])

  console.log({ data, error, loading })

  return (
    <>
        <h2>Todos</h2>
        <LoadErrorHandler error={error} loading={loading}>
            {data?.slice(0, 20).map(todo => <p key={todo.id}>{todo.title}</p>)}
        </LoadErrorHandler>
    </>
  )
}

export default TodoRoute
