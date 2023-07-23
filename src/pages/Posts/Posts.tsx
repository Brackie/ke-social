import React, { useState } from 'react'

import '../../styles/posts/posts.sass'
import PostComponent from '../../components/Posts/PostComponent'
import { 
  Post,
  Tag
} from '../../types/post'
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

  return (
    <div className='container'>
      <ToolBar title='Posts'>
        <div className='search'>
          <input type="text" value='Search for people, posts, tags...'/>
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
