import React, { useEffect, useState } from 'react'
import moment from 'moment'

import '../../styles/posts/story.sass'
import { Story } from '../../types/post'
import profile from '../../images/tim_profile.jpeg'

interface StoryProps {
  story: Story
}

const StoryComponent: React.FC<StoryProps> = ({ story }): JSX.Element => {
  console.log(story)

  /**
   * On component render sets the date state to current date and time
   */
  useEffect(() => {
  }, [])

  return (
    <div className='story'>
      <div className='content'>
        {
          story?.image_url ? (<img 
            src={ story.image_url }
          />) : null
        }
        {
          story?.content ? (<p>{ story.content }</p>) : null
        }
      </div>
      {
        story.user?.profile_image_url ? (
          <img 
            src={ story.user.profile_image_url }
            className='profile'
          />
        ) : (<img 
          src={ profile }
          className='profile'
        />)
      }
    </div>
  )
}

export default StoryComponent
