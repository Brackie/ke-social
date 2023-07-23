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
    profile_image_url: "https://s3-alpha-sig.figma.com/img/d3c6/c0f0/deeb8f5d8ac8b3780b8ad0d1791ed9e6?Expires=1690761600&Signature=jwJSGpV-UHawvaY1YsRoPAGmrDz4Sb~M5MtXXSi3iv0eoE8Ge4XFv0QWVjvka~t7ao~rCDJB5l6n2ba8I9mqs0Ngn3ldqWH70auAhukF2oFCaEBNPxj~dh7cDv1lZqT0ZuEXrmiQYiRnhDYr9KqiwoO5ptU4imSDG2EDf3NgJcAFLI94W2uI1mRKjp8ubSudyDifgpKyVqZHKFZU6pxme~AJ-tgn2UFpFpjL93Mja~KiKNhBnmt3LS8T2k9tM8Ar7whIb3xhb87CqvizZV-uPjPmx4VyUpCDtvE759h0bK~nuOwXAfYxSM~nGTWrFqqsJPOpG56lvOg4Uo5PzHgf3g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    cover_image_url: "https://s3-alpha-sig.figma.com/img/7895/5314/17c24acdd47534bddf7b910de9cab956?Expires=1690761600&Signature=DWp535Tt0n8anRVHlJUaoCDSqTTSB-7rea5bDVXVGBvjUTO10GFrx3GFkp4G9yXypmErhcqwX70mTHaRZa5coOqfrnAecMQ3llaUA12IbDAuC6QADk77t~ByC9cRHi6K~mI7bGfvL9Gqz3kNSzHohaRhu80hxRZb8iaJzCtWFqEEYKhCsbM5QHkS1EStuPsEDhL-Yo5kV9gMGO~m33MGmHO0cHsL4ZOofQCF4W6IMBi5lgpM0XsxHc8Gt0yVYTFSepL~TbV-2G0FU04Gs39k-eFwEA~~QV~SEHIpqzzMEVzRfn6nmPU6YGneByG0u~1-K5OsQmQKlTEhIxpZGPsfqg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
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
      image_url: "https://s3-alpha-sig.figma.com/img/bbb3/e573/e60eb42af5b28643702f03d1d4ad9e55?Expires=1690761600&Signature=GyiHcRLk5WErrD5zxxPpzolpST~X6FwZ3fCWUauewVmh08VOwMDQxaz6isKYIG-Rm8JtCP9lyeFTUxDbFgesLryH-R2wnbkM1nd718CxuUewdbySLYWmkfGoi2UBh0QuDh37glGhNpFg3tX2bIV3sIywBEgi3n39~HP3xkqHe1CezVm7irgJ75RZVDDXDHyDYH8sdblC6WNFpqridB9BorP1DfcklAdcFy0YRNCLDP6dQrjcCC-Jk2VDEJF1NDlovTolRO4gTRaunAGkgq9PEbCTGXaXDqpz2B--Xudc9o8rMbSXv9Se7AgD-kJ2MP7YuSV1z35yzW5m6OVy8wGzmg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
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
                content='Edit Profile'></Button>
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
