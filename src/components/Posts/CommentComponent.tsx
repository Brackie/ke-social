import React, { useEffect, useState } from 'react'
import moment from 'moment'

import '../../styles/posts/comment.sass'
import { Comment } from '../../types/post'
import profile from '../../images/tim_profile.jpeg'
import likes from '../../images/Like.png'

interface CommentProps {
	comment: Comment
}

const CommentComponent: React.FC<CommentProps> = ({ comment }): JSX.Element => {

	return (
		<div className='comment'>
			<img
				src={comment.user?.profile_image_url ? comment.user.profile_image_url : profile}
				className='profile'
			/>
			<div className='comment-details'>
				<h3>{comment.user.name}</h3>
				<p>{comment.content}</p>
				<span>{moment(comment.created_at).format("ddd, hA")}</span>
				<span>{comment.likes} likes</span>
			</div>
			<img
				src={likes}
				className='like'
			/>
		</div>
	)
}

export default CommentComponent
