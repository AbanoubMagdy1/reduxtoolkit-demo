import { Box } from '@mui/system'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import TodoRoute from './pages/TodoRoute'

export default function App () {
  return (
    <>
        <Navbar />
        <Box sx={{ m: 3 }}>
            <Routes>
                <Route path="/" element={<div>Hello world</div>}/>
                <Route path="/todos" element={<TodoRoute/>}/>
            </Routes>
        </Box>
    </>
  )
}
