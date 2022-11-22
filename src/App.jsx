import { Box } from '@mui/system'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import PostRoute from './pages/PostRoute'
import TodoRoute from './pages/TodoRoute'

export default function App () {
  return (
    <>
        <Navbar />
        <Box sx={{ m: 3 }}>
            <Routes>
                <Route path="/" element={<div>Hello world</div>}/>
                <Route path="/todos" element={<TodoRoute/>}/>
                <Route path="/posts" element={<PostRoute/>}/>
            </Routes>
        </Box>
    </>
  )
}
