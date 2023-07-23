import React, { useState } from 'react'
import { Link } from "react-router-dom";

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
      image_url: "https://s3-alpha-sig.figma.com/img/8a8f/a4fc/f6f9d3a5105e8f6b317d65e893ff9a30?Expires=1690761600&Signature=COtTS89LXgFlZ-z1q2T9tadlHAvXbGFfB8NlmQ23eG6ZAKM0oIPT~kQvurC-o27PQodUP8hJYwbOsbVMgtfRlPDgzs6UW6LXNzxMv2nGYpLCbiey5uR8ZhgzUOIFTwrnr~BwR0X0kEa7JitSftn9uFrpciW8Y3n7ki1zPuqt7w6i5OnnO1-h59QyT7jCseaJEmkrJPWKIygeT2b4ERS~kRXqmY4v~q5M4GazglJTviNQ-rMNbTpL7AV0Rdx9hHWFrWXr2fr~aC6GYtP2avyAm8lLBI5R5d4qXHIdcZwJ5qr7iRrakXFco-WgDLkIIarp1z0m6fvHZJo2nZh12cRcLg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      user: {
        id: 1,
        name: "Kim",
        email: "kim@gmail.com",
        profile_image_url: "https://s3-alpha-sig.figma.com/img/225b/1b2f/751626d2e1a535dd87f503ee42ead3e8?Expires=1690761600&Signature=eVmi~AkT8Evft3N4mfK9yR4RauA8qUEGLdyWBjSHz7GcODKD6wx3Iaa2E1lG5mT~MGsnUgOjJMz3jCxCmOYEHoSrjlFMNvBrymqllI8uj-0k-cAd9vI2HGR7fqzSn6b16-8m3A16VhzvELD8jjNXsvifPMKNlWQHpiOqUx9P5zgQtZgXBFSDAzTZpY0pR1RzrWeHUmdgpQmkF~jpGJH8B1QgxNzpmSapVtAviZ1QsqdYtpTsV6ltcZTf4WBNF5YltRBaFtY4qBr3MFAetg2etANdJ0Be43DtE8K1UoPlT4PESCbj5fBf~Q~vHwQSf5B08jJyDJ0ANtnKfUZHQ3n84A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      }
    },
    {
      id: 2,
      content: "",
      image_url: "https://s3-alpha-sig.figma.com/img/a9e9/b86b/02df73d3ec78cba06b5f04dff31c6801?Expires=1690761600&Signature=RJekEuojNTiBuYwTi9LzjFuJagef7lQFUQ6gWy-fxfNkuVEitjelT-ZNi6KYyKJIJQ6h4EOp8iX7g8gdhXSKvaoMKuPARfL8oaTKqcymPevRBZhDqewEiiq1y9dn6ss3v5MytGgDgIUnxK9hVdosTnRh6TRiWbO~ku~xZM3drNqXlUPjhyZervELTvzcsnY8IzjbRNtEAtXy7zhy-B52oaf~TGic5lcKdzPgU7Dj1uhBGtFVtYM8SEMQbamtPOH3GDvtCN4IDh2eUcsZ9XnAqlpoEXjbTcpuml1tsgQOWKbIYG9XuBQSV7GTGtKF~-o0kQ6Gn0r6nSoVkFesqW3H7w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      user: {
        id: 1,
        name: "Steve",
        email: "steve@gmail.com",
        profile_image_url: "https://s3-alpha-sig.figma.com/img/5ba6/3340/8981907adb4cdc9c14be2ac429a30ff6?Expires=1690761600&Signature=KhRWSMYwLZkQJiHQu6vGxU57Ujgg5J9uwk-D5lXLGqpxwqRiQAwQ1w6t9dPEsnLLbUAD39wdWT8YPKFZZnz4QPwSI~SIR0oomIMqLCxt2ITZsghnFW6GIx0mYPwUJ9ibJzOft0wbu-ed3roH-G7G7VNeqRDE84lvOVBv5NxZLP4xECafYhkHqxbsU4x4vLHMpnWBDRDwV0040nN7rq8Uegtt-yNlHz2XdK~qyGvGBlPRAm14kPylHoWjBtz9MO-zcXx3nX7ZyB6zK6atBqtIuI4cVnFD5yNOPAgr1QuRvHjThzm6AO0jzlFKkraecmcM15N7sL0gGtV-Ut2K~hyyEA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      }
    },
    {
      id: 3,
      content: "",
      image_url: "https://s3-alpha-sig.figma.com/img/d06e/5be8/f26a56d8257ff39e1824c680ec5b03d2?Expires=1690761600&Signature=nQkFAxKclSpKsPVmImwRB6YS7j0mZoKwTeaX4Jeq7YQEX2LoSWluxRdr8hzlcxhQModqBxdQzg6RyWKzC9jyVwyN7hBOjIThJUA1ckrVuMgfgMs8q7J3hJyvkEnUau-05VFJzsgjtaC5b11-XzjXT0SxK8tywMU9zSal13x2JacLiI~l6n278H6TPxzL~D8f66Se2ZoJSmYJIw4Zx6YaGrEeIwrknbi4LqhUgnchUiXUsBAebnIN40klePGSWYrgM8pHYhxb63WbiryHc11bzlu3AABHh2yV2flsySeodtD7jbwHV4jWQBBErds5lsxtK5-xT-2Ea8RcsA0CROCEQA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      user: {
        id: 1,
        name: "Mia",
        email: "mia@gmail.com",
        profile_image_url: "https://s3-alpha-sig.figma.com/img/f6fe/e6c5/14ebcb03ed8077b32f5d7d413e915641?Expires=1690761600&Signature=kzRWC3CdgopqY218tp3EYWPSd06Cw8TvQaKK47wCLkU73qwmdp1c--0qu-hW9Ah5GZOE3nav5G9nNK8BoTKEn~FkOit0DYOmD1p4dsQLWvgoKyMTAgUN38Nyhm33l2FQmHt7042mxDDRXXgMc~yJHzfaPNiZNXZ5aJB-vKWglFbZlEIsvvgoU78WDn7p6BcmQDCyJ3F1eiIJJlmBeSgUFzx-J8m4gWnleScWzibP73yX9aWYvmTOu-LXZdVrYAFutGl7boT7mXj8vhTxsqsXh0XWG18JjzMo5NTlTzHdHMaH0gdW2mPiJrCkGZAaviTOBwmQ~EqiFPJ~i~WCvmP2CQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
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
      image_url: "https://s3-alpha-sig.figma.com/img/bbb3/e573/e60eb42af5b28643702f03d1d4ad9e55?Expires=1690761600&Signature=GyiHcRLk5WErrD5zxxPpzolpST~X6FwZ3fCWUauewVmh08VOwMDQxaz6isKYIG-Rm8JtCP9lyeFTUxDbFgesLryH-R2wnbkM1nd718CxuUewdbySLYWmkfGoi2UBh0QuDh37glGhNpFg3tX2bIV3sIywBEgi3n39~HP3xkqHe1CezVm7irgJ75RZVDDXDHyDYH8sdblC6WNFpqridB9BorP1DfcklAdcFy0YRNCLDP6dQrjcCC-Jk2VDEJF1NDlovTolRO4gTRaunAGkgq9PEbCTGXaXDqpz2B--Xudc9o8rMbSXv9Se7AgD-kJ2MP7YuSV1z35yzW5m6OVy8wGzmg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      likes: 100,
      shares: 50,
      created_at: "2023-07-22 10:46:23",
      user: {
        id: 1,
        name: "Kat Williams",
        email: "kat@gmail.com",
        profile_image_url: "https://s3-alpha-sig.figma.com/img/0112/cefd/7cca6323434d6c181203f59eca773039?Expires=1690761600&Signature=bpf1JewYij2GSfEaMG5ZtZoMnFMGfQsjjML-CTtUR-G2WsxLY5Lr9ttHwPevBQkcC2RVJzyRec5zla4v8U-z8qTjLcZKJ2d8437KR0gemtbgLBTypZZ~8GgLutne3rfZ6tUCVDB4MUxjPkhQRCuOg2YEi1YMaKCQZBIuSHbCJKKnJlNQ9sy42XMRnTTWxEBc4~577WxpFgkJvAGIO91ijWmNAWKhnqRA31GsUNNksOGKdMVXZYIX3HrUasQ6T5MVfR9d5rH-olv~3bhIURr~5oKILtwCo91a9is2bA0jnr3Ld97QCdZifxB4FcF2jGl5xN2Pl9Cmlg-4it~-~16OhA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
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
