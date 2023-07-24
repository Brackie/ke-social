import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import moment from 'moment'

import '../../styles/posts/post.sass'
import { Post } from '../../types/post'
import profile from '../../images/tim_profile.jpeg'
import options from '../../images/options.png'
import likes from '../../images/Like.png'
import comments from '../../images/Comment.png'
import shares from '../../images/Share.png'
import { ROUTES } from '../../resources/routes-constants'

interface PostProps {
  post: Post
}

const PostComponent: React.FC<PostProps> = ({ post }): JSX.Element  => {
  console.log(post)

  const navigate = useNavigate()

  const viewPost = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    navigate(ROUTES.VIEWPOSTSPAGE_ROUTE, {
      state: {
        postId: post.id
      }
    })
  };

  return (
    <div 
      className='post'
      onClick={e => viewPost(e)}
    >
      <div className='user-info'>
        <img 
          src={ post.user?.profile_image_url ? post.user.profile_image_url : profile }
          className='profile'
        />
        <div className='header-details'>
          <h3>{ post.user.name }</h3>
          <span>{ moment(post.created_at).format("ddd, hA") }</span>
        </div>
        <img 
          src={options}
          className='options'
        />
      </div>
      <div className="content">
        { post?.content ? <p>{ post.content }</p> : null }
        { post?.image_url ? <img src={post?.image_url} alt="" /> : null }
      </div>
      <div className="interactions row">
        <div className="action">
          <img 
            src={likes}
          />
          <span className='likes'>{ post.likes }</span>
        </div>
        <div className="action">
          <img 
            src={comments}
          />
          <span className='likes'>{ post.comments?.length ? post.comments.length : 0 }</span>
        </div>
        <div className="action">
          <img 
            src={shares}
          />
          <span className='likes'>{ post.shares }</span>
        </div>
      </div>
    </div>
  )
}

export default PostComponent
