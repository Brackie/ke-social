import React, { useState } from 'react'

import '../../styles/posts/create-post.sass'
import profile from '../../images/tim_profile.jpeg'
import close from '../../images/Close.png'
import image from '../../images/Image.png'
import gif from '../../images/GIF.png'
import camera from '../../images/Camera.png'
import attach from '../../images/Attachment.png'
import { Post } from '../../types/post'
import ToolBar from '../../components/Nav/ToolBar'
import BottomNav from '../../components/Nav/BottomNav'
import Button from '../../components/Button'

interface CreatePostProps {
  posts: Post[]
}

const CreatePost: React.FC = (): JSX.Element => {
  return (
    <div className="container">
      <ToolBar
        title='Create'
        backButtonVisible={false}
      >
        <a
          href="#"
          className='discard'
        >Discard</a>
        <Button
          fill='primary'
          content='Create'
          className="create"
        ></Button>
      </ToolBar>

      <div className='create-post'>
        <div className="content">
          <div className="row">
            <img
              src={profile}
              className='profile'
            />
            <input
              type="text"
              placeholder="What's on your mind..."
            />
          </div>
        </div>

        <div className="media">
          <img
            src={close}
            className='close-icon'
          />
          <div className="options">
            <div className="row">
              <img
                src={image}
                className='pic-icon'
              />
              <img
                src={gif}
                className='gif-icon'
              />
              <img
                src={camera}
                className='camera-icon'
              />
              <img
                src={attach}
                className='attach-icon'
              />
            </div>
          </div>
        </div>
      </div>

      <BottomNav></BottomNav>
    </div>
  )
}

export default CreatePost
