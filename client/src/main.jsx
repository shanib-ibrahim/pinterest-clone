import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './pages/Home/index.jsx'
import Create from './pages/Create/index.jsx'
import Post from './pages/Post/index.jsx'
import Auth from './pages/Auth/index.jsx'
import UserProfile from './pages/UserProfile/index.jsx'
import Search from './pages/Search/index.jsx'
import Layout from './pages/Layout/index.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />} >
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/pin/:id" element={<Post />} />
          <Route path="/:username" element={<UserProfile />} />
          <Route path="/search" element={<Search />} />
        </Route>
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
