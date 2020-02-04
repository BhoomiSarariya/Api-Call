import React from 'react';
import './App.css';
import axios from 'axios';
import AddUserDetail from './AddUserDetail';
import DeleteUserDetail from './DeleteUserDetail';
import EditUserDetail from './EditUserDetail';
class UserDetail extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			user_more: [],
			...this.props.data
		}
	}

	UNSAFE_componentWillReceiveProps(props) {
		console.log("user_id", props.user_id);
	}
	componentDidUpdate(prevProps) {
		if (this.props.user_id !== prevProps.user_id) {
			axios.get(`https://node-fake-api.herokuapp.com/user/${this.props.user_id}`)
				.then(response => this.setState({
					user_more: response.data.data,
					user_id: response.data.data.id,
					user_first_name: response.data.data.first_name,
					user_last_name: response.data.data.last_name,
					user_email: response.data.data.email
				}))
				.catch(function (error) {
					console.log(error);
				})
				.finally(function () {
					//	console.log("");
				})
		}
	}
	render() {
		const { user_id, user_email, user_first_name, user_last_name } = this.state
		const { avatar } = this.state.user_more
		return (
			<>{user_id &&
				<div className="contaier row col-md-9 col-sm-9">
					<div className="card col-md-5 col-sm-5">
						<div className="card-img-block">
							<img className="card-img-top" src={avatar} alt="user"></img>
						</div>
						<h4 className="card-title">{user_first_name} {user_last_name}</h4>
						<div className="card-body ">
							<p className="card-text">{user_email}</p>
						</div>
					</div>
				</div>
			}
			{/* for edit */}
			<EditUserDetail
				handleClose={this.props.handleClose}
				statusEdit={this.props.statusEdit}
				user_first_name={this.state.user_first_name}
				user_last_name={this.state.user_last_name}
				user_email={this.state.user_email}
			/>

			{/* for delete */}
			<DeleteUserDetail
				handleClose={this.props.handleClose}
				statusDelete={this.props.statusDelete}
			/>
			{/* for add */}
			<AddUserDetail
				handleClose={this.props.handleClose}
				statusAdd={this.props.statusAdd}
			/>

			</>
		)
	}
}
export default UserDetail;
