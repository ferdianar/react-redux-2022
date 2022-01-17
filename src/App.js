import React, { Component } from 'react'

// import Card Users Components
import CardUsers from './components/CardUsers'

// import Form Components
import Forms from './components/Forms'

export default class App extends Component {
	state = {
		users: [
			{ username: "ferdian", email: "ferdian@gmail.com", university: "asia", id: 22 },
			{ username: "thomas", email: "thomas@outlook.com", university: "cambridge", id: 43 },
			{ username: "fadhila", email: "fadhila@gmail.com", university: "terbuka", id: 76 }
		]
	}

	addUsers = (user) => {
		user.id = Math.random()
		let users = [...this.state.users, user]
		this.setState({
			users: users
		})
		console.log(this.state.users);
	}
	render() {
		return (
			<React.Fragment>
				<div className="w-full flex gap-x-8">
					{/* Render Form Component */}
					<Forms addUsers={this.addUsers} />
					<div className="w-full flex flex-col">
						{/* Card Users */}
						<CardUsers users={this.state.users} />
					</div>
				</div>
			</React.Fragment>
		)
	}
}
