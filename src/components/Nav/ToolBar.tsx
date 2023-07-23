import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import '../../styles/partials/_toolbar.sass'
import back from '../../images/Arrow Left.png'

interface ToolBarProps {
	title: string
	children?: string | JSX.Element | JSX.Element[]
	backButtonVisible?: boolean
}

const ToolBar: React.FC<ToolBarProps> = ({ children, title, backButtonVisible }): JSX.Element => {
	const [backButtonDisplay, setBackButtonDisplay] = useState<string>("block")
	const navigate = useNavigate()

	useEffect(() => {
		setBackButtonDisplay(backButtonVisible ? "block" : "none")
	}, [backButtonVisible])

	const goBack = (e: React.MouseEvent<HTMLImageElement>) => {
		e.preventDefault()
		navigate(-1)
	}

	return (
		<div className='toolbar'>
			<img
				style={{ display: backButtonDisplay }}
				src={back}
				alt="Back"
				className='back'
				onClick={e => goBack(e)}
			/>
			<h2>{ title }</h2>
			{ children }
		</div>
	)
}

export default ToolBar
