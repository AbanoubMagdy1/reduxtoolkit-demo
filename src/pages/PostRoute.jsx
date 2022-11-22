import { Grow, ListItem, ListItemText, Paper } from '@mui/material'
import { Stack } from '@mui/system'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import propTypes from 'prop-types'

import { getPosts } from '../actions/postsActions'
import LoadErrorHandler from '../components/LoadErrorHandler'

function PostRoute () {
  const { data, error, loading, fetched } = useSelector(state => state.posts)
  const dispatch = useDispatch()

  useEffect(() => {
    if (!fetched) dispatch(getPosts())
  }, [])

  return (
    <>
        <h2 style={{ fontSize: 30, marginBottom: '2rem' }}>Posts</h2>
        <LoadErrorHandler error={error} loading={loading}>
          <Stack spacing={4}>
            {data?.slice(0, 20).map((post, i) => <Post key={post.id} post={post} index={i + 1} />)}
          </Stack>
        </LoadErrorHandler>
    </>
  )
}

function Post ({ post, index }) {
  return <Grow in={true} timeout={index * 400}>
    <Paper variant="outlined">
      <ListItem>
        <ListItemText primary={post.title} secondary={post.body} />
      </ListItem>
    </Paper>
    </Grow>
}

Post.propTypes = {
  post: propTypes.object.isRequired,
  index: propTypes.number.isRequired
}

export default PostRoute
