import React from 'react'

import '../../styles/partials/_tab.sass'

interface TabProps {
	pages: string[]
	setCurrentTab(e: React.MouseEvent<HTMLAnchorElement>, page: string): void
}

const Tab: React.FC<TabProps> = ({ pages, setCurrentTab }): JSX.Element => {

	return (
		<div className='tab'>
			<div className="row">
				{pages.map((page, i) => (
					<a
						key={i}
						href="#"
						onClick={e => setCurrentTab(e, page)}
					>{page}</a>
				))}
			</div>
		</div>
	)
}

export default Tab
