import React from 'react'

import '../../styles/partials/_toolbar.sass'
import back from '../../images/Arrow Left.png'

interface ToolBarProps {
	children: string | JSX.Element | JSX.Element[]
	title: string
}

const ToolBar: React.FC<ToolBarProps> = ({ children, title }): JSX.Element => {

	return (
		<div className='toolbar'>
			<img
				src={back}
				alt="Post"
				className='active'
			/>
			<h2>{ title }</h2>
			{ children }
		</div>
	)
}

export default ToolBar
