import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import '../styles/home.sass'
import StoryComponent from '../components/Posts/StoryComponent'
import PostComponent from '../components/Posts/PostComponent'
import { 
  Story,
  Post
} from '../types/post'
import message from '../images/Message.png'
import BottomNav from '../components/Nav/BottomNav'

const Home: React.FC = () => {
  const [stories, setStories] = useState<Story[] | []>([
    {
      id: 1,
      content: "",
      image_url: require("../images/story1.jpeg"),
      user: {
        id: 1,
        name: "Kim",
        email: "kim@gmail.com",
        profile_image_url: require("../images/beauty1.jpeg"),
      }
    },
    {
      id: 2,
      content: "",
      image_url: require("../images/story2.jpeg"),
      user: {
        id: 1,
        name: "Steve",
        email: "steve@gmail.com",
        profile_image_url: require("../images/beauty2.jpeg"),
      }
    },
    {
      id: 3,
      content: "",
      image_url: require("../images/story1.jpeg"),
      user: {
        id: 1,
        name: "Mia",
        email: "mia@gmail.com",
        profile_image_url: require("../images/beauty3.jpeg"),
      }
    }
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
      image_url: require("../images/kats_post.jpeg"),
      likes: 100,
      shares: 50,
      created_at: "2023-07-22 10:46:23",
      user: {
        id: 1,
        name: "Kat Williams",
        email: "kat@gmail.com",
        profile_image_url: require("../images/katwilliams.jpeg"),
      }
    },
  ])

  return (
    <div className='container'>
      <div className='home'>
        <div className='welcome'>
          <h2>Good Morning Alex</h2>
          <img 
            src={message}
            className='message-icon'
          />
        </div>
        
        <Link
          to="/posts"
          className='see-all-posts'
        >See all</Link>

        <section className='stories'>
          {stories.map(story => (
            <StoryComponent key={story.id} story={story} />
          ))}
        </section>

        <section className='featured-posts'>
          {posts.map(post => (
            <PostComponent key={post.id} post={post} />
          ))}
        </section>
      </div>

      <BottomNav></BottomNav>
    </div>
  )
}

export default Home
