import React, { useEffect, useState } from 'react'

interface ButtonProps {
	fill: string
	border?: string
	content: string
	className?: string
}

const Button: React.FC<ButtonProps> = ({ fill, border, content, className }): JSX.Element => {
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
				color: "#fff",
				background: selectedColor,
				border: border ? border : 0,
				padding: '4px 10px',
				borderRadius: '24px',
				textAlign: 'center',
				fontFamily: '$font-hanken-grotesk',
				fontSize: '14px',
				fontStyle: 'normal',
				fontWeight: '700',
				lineHeight: '16px',
			}}
			className={className}
		>
			{content}
		</button>
	)
}

export default Button
