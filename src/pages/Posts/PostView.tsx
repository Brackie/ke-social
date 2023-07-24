import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

import '../../styles/posts/post-view.sass'
import PostComponent from '../../components/Posts/PostComponent'
import { Post, Comment } from '../../types/post'
import ToolBar from '../../components/Nav/ToolBar'
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
          profile_image_url: "https://s3-alpha-sig.figma.com/img/0112/cefd/7cca6323434d6c181203f59eca773039?Expires=1690761600&Signature=bpf1JewYij2GSfEaMG5ZtZoMnFMGfQsjjML-CTtUR-G2WsxLY5Lr9ttHwPevBQkcC2RVJzyRec5zla4v8U-z8qTjLcZKJ2d8437KR0gemtbgLBTypZZ~8GgLutne3rfZ6tUCVDB4MUxjPkhQRCuOg2YEi1YMaKCQZBIuSHbCJKKnJlNQ9sy42XMRnTTWxEBc4~577WxpFgkJvAGIO91ijWmNAWKhnqRA31GsUNNksOGKdMVXZYIX3HrUasQ6T5MVfR9d5rH-olv~3bhIURr~5oKILtwCo91a9is2bA0jnr3Ld97QCdZifxB4FcF2jGl5xN2Pl9Cmlg-4it~-~16OhA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
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
          <h3>COMMENTS ({ post.comments?.length ? post.comments.length : 0 })</h3>
          {post?.comments ? post.comments.map(comment => (
            (<CommentComponent key={comment.id} comment={comment}/>)
          )) : null}
        </div>
      </div>
    </div>
  )
}

export default PostView
