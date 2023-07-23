import React, { useEffect, useState } from 'react'

import '../../styles/partials/_toolbar.sass'
import back from '../../images/Arrow Left.png'

interface ToolBarProps {
	title: string
	children?: string | JSX.Element | JSX.Element[]
	backButtonVisible?: boolean
}

const ToolBar: React.FC<ToolBarProps> = ({ children, title, backButtonVisible }): JSX.Element => {
	const [backButtonDisplay, setBackButtonDisplay] = useState<string>("block");

	useEffect(() => {
		setBackButtonDisplay(backButtonVisible ? "block" : "none")
	}, [backButtonVisible])

	return (
		<div className='toolbar'>
			<img
				style={{ display: backButtonDisplay }}
				src={back}
				alt="Back"
				className='back'
			/>
			<h2>{ title }</h2>
			{ children }
		</div>
	)
}

export default ToolBar
