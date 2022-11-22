import React from 'react'
import { Alert, CircularProgress } from '@mui/material'
import propTypes from 'prop-types'

function LoadErrorHandler ({ error, loading, children }) {
  return (
    <div style={{ marginTop: '1rem' }}>
    {loading && <div style={{ textAlign: 'center' }}>
        <CircularProgress size={150} />
      </div>}
    {error && <Alert severity="error">An error occured, Try again later</Alert>}
    {children}
    </div>

  )
}

LoadErrorHandler.propTypes = {
  error: propTypes.object,
  loading: propTypes.bool,
  children: propTypes.node
}

export default LoadErrorHandler
