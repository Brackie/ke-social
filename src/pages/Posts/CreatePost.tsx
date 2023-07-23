import React, { useState } from 'react'

import '../../styles/user/user-posts.sass'
import PostComponent from '../../components/Posts/PostComponent'
import { Post } from '../../types/post'

interface UserPostProps {
    posts: Post[]
}

const Posts: React.FC<UserPostProps> = ({ posts }): JSX.Element => {
  return (
    <div className='user-posts'>
      {posts.map(post => (
        <PostComponent key={post.id} post={post} />
      ))}
    </div>
  )
}

export default Posts
