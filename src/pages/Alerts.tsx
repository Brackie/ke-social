import React, { useState } from 'react'

import '../styles/user/user-alerts.sass'
import { Post } from '../types/post'
import ToolBar from '../components/Nav/ToolBar'
import BottomNav from '../components/Nav/BottomNav'

interface UserPostProps {
    posts: Post[]
}

const Alerts: React.FC = (): JSX.Element => {
  return (
    <div className="container">
      <ToolBar 
        title='Alerts' 
        backButtonVisible={false}
      >
        <a 
          href="#"
          className='discard'
        >Mark all as read</a>
      </ToolBar>

      <div className='user-alerts'>

      </div>

      <BottomNav></BottomNav>
    </div>
  )
}

export default Alerts
