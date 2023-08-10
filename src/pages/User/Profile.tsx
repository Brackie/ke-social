import React, { useState } from 'react'

import '../../styles/user/profile.sass'
import ToolBar from '../../components/Nav/ToolBar'
import BottomNav from '../../components/Nav/BottomNav'
import Tab from '../../components/Nav/Tab'
import Button from '../../components/Button'
import UserPosts from '../../components/User/UserPosts'
import profile from '../../images/tim_profile.jpeg'
import cover from '../../images/cover_default.jpeg'
import { Post } from '../../types/post'
import { User } from '../../types/user'

const Profile: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("posts");
  const [user, setUser] = useState<User>({
    id: 1,
    name: "Alex Tsimikas",
    email: "alex@gmail.com",
    location: "Brooklyn, NY",
    bio: "Writer by Profession. Artist by Passion!",
    profile_image_url: require("../../images/beauty4.jpeg"),
    cover_image_url: require("../../images/cover_default.jpeg"),
  })

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


  const setCurrentTab = (e: React.MouseEvent<HTMLAnchorElement>, page: string) => {
    e.preventDefault()
    setActiveTab(page.toLowerCase())
  }

  return (
    <div className='container'>
      <ToolBar title='Profile'>
        <div className='cover'>
          <div className="overlay"></div>
          <img
            src={user?.cover_image_url ? user.cover_image_url : cover}
          />
        </div>
      </ToolBar>

      <div className='user-profile'>
        <img
          src={user?.profile_image_url ? user.profile_image_url : profile}
          className='profile-img'
        />
        <h3 className='name'>{ user.name }</h3>
        <p className='location'>{ user?.location }</p>
        <p className='bio'>{ user?.bio }</p>

        <div className="actions">
          <div className="row">
            <div className="action">
              <h3>2467</h3>
              <p>Followers</p>
            </div>
            <div className="action">
              <h3>0</h3>
              <p>Following</p>
            </div>
            <div className="action">
              <Button
                fill='outline'
                border='1.5px #fff solid'
                content='Edit Profile'
              />
            </div>
          </div>
        </div>

        <Tab
          pages={["Posts", "Stories"]}
          setCurrentTab={setCurrentTab}
        ></Tab>
      </div>

      <div className="tab-pages">
        { activeTab === "posts" ? (<UserPosts posts={posts}/>) : null }
      </div>

      <BottomNav></BottomNav>
    </div>
  )
}

export default Profile
