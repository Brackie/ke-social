import React from 'react'
import { Link } from 'react-router-dom'

import '../../styles/partials/_bottomnav.sass'
import feed from '../../images/Feed.png'
import search from '../../images/search.png'
import add from '../../images/Plus.png'
import alert from '../../images/Alert.png'
import account from '../../images/Profile.png'

const BottomNav: React.FC = (): JSX.Element => {

	return (
		<div className='bottom-nav'>
			<div className="row">
				<div className="icon">
					<Link to="/">
						<img
							src={feed}
							alt="Feed"
						/>
					</Link>
				</div>
				<div className="icon">
					<Link to="/posts">
						<img
							src={search}
							alt="Search"
						/>
					</Link>
				</div>
				<div className="icon">
					<Link to="/create">
						<img
							src={add}
							alt="Post"
							className='active'
						/>
					</Link>
				</div>
				<div className="icon">
					<Link to="/alerts">
						<img
							src={alert}
							alt="Notification"
						/>
					</Link>
				</div>
				<div className="icon">
					<Link to="/account">
						<img
							src={account}
							alt="Profile"
						/>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default BottomNav
