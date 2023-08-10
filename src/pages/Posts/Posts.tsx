import React, { useState } from 'react'

import '../../styles/posts/posts.sass'
import { 
  Post,
  Tag
} from '../../types/post'
import PostComponent from '../../components/Posts/PostComponent'
import ToolBar from '../../components/Nav/ToolBar'
import BottomNav from '../../components/Nav/BottomNav'

const Posts: React.FC = () => {
  const [tags, setTags] = useState<Tag[] | []>([
    { id: 1, tag: "All", },
    { id: 2, tag: "Profiles", },
    { id: 3, tag: "Photos", },
    { id: 4, tag: "Videos", },
    { id: 5, tag: "Text", },
    { id: 6, tag: "Links", },
  ])
  const [posts, setPosts] = useState<Post[] | []>([
    {
      id: 1,
      content: "“If you think you are too small to make a difference, try sleeping with a mosquito.” ~ Dalai Lama",
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
      image_url: require("../../images/kats_post.jpeg"),
      likes: 100,
      shares: 50,
      created_at: "2023-07-22 10:46:23",
      user: {
        id: 1,
        name: "Kat Williams",
        email: "kat@gmail.com",
        profile_image_url: require("../../images/katwilliams.jpeg"),
      }
    },
  ])

  return (
    <div className='container'>
      <ToolBar 
        title='Posts'
      >
        <div className='search'>
          <input type="text" placeholder='Search for people, posts, tags...'/>
        </div>
      </ToolBar>

      <div className='posts'>
        <div className="tags">
          <div className="row">
            {
              tags.map(tag => (
                <div key={tag.id} className="tag">
                  <span>{ tag.tag }</span>
                </div>
              ))
            }
          </div>
        </div>

        {posts.map(post => (
          <PostComponent key={post.id} post={post} />
        ))}
      </div>

      <BottomNav></BottomNav>
    </div>
  )
}

export default Posts
