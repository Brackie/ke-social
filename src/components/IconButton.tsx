import React, { useEffect, useState } from 'react'

interface ButtonProps {
	fill: string
	border?: string
	icon: string
	className?: string
}

const IconButton: React.FC<ButtonProps> = ({ fill, border, icon, className }): JSX.Element => {
	const [selectedColor, setSelectedColor] = useState<string>();

	useEffect(() => {
		switch (fill) {
			case "gradient":
				setSelectedColor("linear-gradient(90deg, #F62E8E 0%, #AC1AF0 100%)")
				break
			case "outline":
				setSelectedColor("transparent")
				break
			default:
				setSelectedColor("#F62E8E")
		}

	}, [fill])

	return (
		<button
			style={{
				width: '30px',
				height: '30px',
				color: "#fff",
				background: selectedColor,
				border: border ? border : 0,
				padding: '5px',
				borderRadius: '50%',
				textAlign: 'center',
				fontFamily: '$font-hanken-grotesk',
				fontSize: '14px',
				fontStyle: 'normal',
				fontWeight: '700',
				lineHeight: '16px',
			}}
			className={className}
		>
			<img 
				src={icon} 
				alt="Icon" 
				style={{
					width: '90%', 
					height: '90%', 
				}}
			/>
		</button>
	)
}

export default IconButton
