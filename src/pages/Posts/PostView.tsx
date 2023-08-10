import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

import '../../styles/posts/post-view.sass'
import send from '../../images/Send.png'
import PostComponent from '../../components/Posts/PostComponent'
import { Post } from '../../types/post'
import ToolBar from '../../components/Nav/ToolBar'
import IconButton from '../../components/IconButton'
import CommentComponent from '../../components/Posts/CommentComponent'

interface PostViewProps {
  postId: number
}

const PostView: React.FC = (): JSX.Element => {
  const { postId } = useParams()
  console.log(postId)

  const [post, setPost] = useState<Post>({
    id: 1,
    content: "“If you think you are too small to make a difference, try sleeping with a mosquito.” ~ Dalai Lama",
    likes: 2000,
    shares: 10,
    created_at: "2023-07-22 18:46:23",
    user: {
      id: 1,
      name: "Jacob Washington",
      email: "jacob@gmail.com",
    },
    comments: [
      {
        id: 1,
        content: "Lol 😆",
        likes: 2000,
        shares: 10,
        created_at: "2023-07-22 18:46:23",
        user: {
          id: 1,
          name: "Jacob Washington",
          email: "jacob@gmail.com",
        }
      },
      {
        id: 2,
        content: "Very true!",
        likes: 2000,
        shares: 10,
        created_at: "2023-07-22 10:46:23",
        user: {
          id: 1,
          name: "Kat Williams",
          email: "kat@gmail.com",
          profile_image_url: require("../../images/katwilliams.jpeg"),
        }
      },
    ],
  })

  return (
    <div className='container'>
      <ToolBar
        title='Posts'
        backButtonVisible={true}
      />

      <div className='post-view'>
        <PostComponent post={post} />
        <div className="comments">
          <h3>COMMENTS ({post.comments?.length ? post.comments.length : 0})</h3>
          {post?.comments ? post.comments.map(comment => (
            (<CommentComponent key={comment.id} comment={comment} />)
          )) : null}
        </div>
      </div>

      <div className="add-comment">
        <input type="text" placeholder='Type your comment here...' />
        <IconButton
          fill='primary'
          icon={send}
        />
      </div>
    </div>
  )
}

export default PostView
