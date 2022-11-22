import { Grow, ListItem, ListItemText, Paper } from '@mui/material'
import { Stack } from '@mui/system'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import propTypes from 'prop-types'

import { getTodos } from '../actions/todosActions'
import LoadErrorHandler from '../components/LoadErrorHandler'

function TodoRoute () {
  const { data, error, loading, fetched } = useSelector(state => state.todos)
  const dispatch = useDispatch()

  useEffect(() => {
    if (!fetched) dispatch(getTodos())
  }, [])

  return (
    <>
        <h2 style={{ fontSize: 30, marginBottom: '2rem' }}>Todos</h2>
        <LoadErrorHandler error={error} loading={loading}>
          <Stack spacing={4}>
            {data?.slice(0, 20).map((todo, i) => <Todo key={todo.id} todo={todo} index={i + 1} />)}
          </Stack>
        </LoadErrorHandler>
    </>
  )
}

function Todo ({ todo, index }) {
  return <Grow in={true} timeout={index * 400}>
    <Paper variant="outlined">
      <ListItem>
        <ListItemText primary={`Todo ${index}`} secondary={todo.title} />
      </ListItem>
    </Paper>
    </Grow>
}

Todo.propTypes = {
  todo: propTypes.object.isRequired,
  index: propTypes.number.isRequired
}

export default TodoRoute
