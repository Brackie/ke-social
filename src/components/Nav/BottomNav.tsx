import React from 'react'

import '../../styles/partials/_bottomnav.sass'
import feed from '../../images/Feed.png'
import search from '../../images/search.png'
import add from '../../images/Plus.png'
import alert from '../../images/Alert.png'
import account from '../../images/Profile.png'
import { access } from 'fs'

const BottomNav: React.FC = () => {

	return (
		<div className='bottom-nav'>
			<div className="row">
				<div className="icon">
					<img
						src={feed}
						alt="Feed"
					/>
				</div>
				<div className="icon">
					<img
						src={search}
						alt="Search"
					/>
				</div>
				<div className="icon">
					<img
						src={add}
						alt="Post"
						className='active'
					/>
				</div>
				<div className="icon">
					<img
						src={alert}
						alt="Notification"
					/>
				</div>
				<div className="icon">
					<img
						src={account}
						alt="Profile"
					/>
				</div>
			</div>
		</div>
	)
}

export default BottomNav
