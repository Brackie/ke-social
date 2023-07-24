import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import './styles/main.sass'
import { ROUTES } from './resources/routes-constants'
import NotFound from './pages/NotFound'
import Home from './pages/Home'
import Posts from './pages/Posts/Posts'
import CreatePost from './pages/Posts/CreatePost'
import PostView from './pages/Posts/PostView'
import Alert from './pages/Alerts'
import Profile from './pages/User/Profile'

const RootComponent: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<NotFound/>} />
        <Route path={ROUTES.HOMEPAGE_ROUTE} element={<Home />} />
        <Route path={ROUTES.POSTSPAGE_ROUTE} element={<Posts />} />
        <Route path={ROUTES.VIEWPOSTSPAGE_ROUTE} element={<PostView />} />
        <Route path={ROUTES.CREATEPOST_ROUTE} element={<CreatePost />} />
        <Route path={ROUTES.ALERTS_ROUTE} element={<Alert />} />
        <Route path={ROUTES.ACCOUNT_ROUTE} element={<Profile />} />
      </Routes>
    </Router>
  )
}

export default RootComponent
