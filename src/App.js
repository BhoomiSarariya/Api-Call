import React from 'react';
import './App.css';
import UserDetail from './UserDetail';
import UserList from './UserList';
import './App.scss';

class App extends React.Component {
	state = {
		user: [],
		user_id: 0,
		statusEdit: false,
		statusDelete: false,
		user_first_name: '',
		user_last_name: '',
		user_email: ''
	}
	userData = (p1, p2, p3, e) => {
		setTimeout(
			this.setState({
				user_id: Number(p1),
				user_first_name: p2,
				user_last_name: p3,
				statusEdit: false,
				statusDelete: false,
				statusAdd: false
			})
			, 200);
		console.log(this.state.user_first_name);
	}
	handleClose = () => {
		this.setState({
			statusEdit: false,
			statusDelete: false,
			statusAdd: false
		})
	};
	handleShow = (p1, e) => {
		this.setState({
			user_id: Number(p1),
			statusEdit: true,
		})
	}
	handleShowDelete = (p1, e) => {
		this.setState({
			user_id: Number(p1),
			statusDelete: true,
		})
	}
	handleShowAdd = (e) => {
		this.setState({
			statusAdd: true,
		})
	}
	userInformation = () => {
		this.setState({
			user_id: this.state.user_id
		})
		console.log("userInformation", this.state.user_id, this.state.user_first_name);
	}
	render() {
		return (
			<div className="container-fluid App flex-container row" >
				<UserList userData={this.userData}
					handleShowAdd={this.handleShowAdd}
					handleShow={this.handleShow}
					handleClose={this.handleClose}
					handleShowDelete={this.handleShowDelete}
				/>
				<div className="user-data col-md-9 col-sm-9">
					<UserDetail user_id={this.state.user_id}
						handleShow={this.handleShow}
						handleShowAdd={this.handleShowAdd}
						handleClose={this.handleClose}
						handleShowDelete={this.handleShowDelete}
						// handleSave={this.handleSave}
						statusAdd={this.state.statusAdd}
						statusEdit={this.state.statusEdit}
						statusDelete={this.state.statusDelete}
					/>
				</div>
			</div>
		);
	}

}

export default App;
