import React from 'react';
import './App.css';
import axios from 'axios';
import './App.scss';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash, faUserPlus } from '@fortawesome/free-solid-svg-icons'

class UserList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			user: [],
			user_id: 0,
			statusEdit: false,
			statusDelete: false,
			statusAdd: false
		}
	}
	componentDidMount() {
		axios.get('https://node-fake-api.herokuapp.com/user/')
			.then(response => {
				this.setState({
					user: response.data.data,
				})
			})
			.catch(function (error) {
				console.log(error);
			})
			.finally(function () {

			});
	}
	render() {
		return (
			<div className="user-list col-md-3 col-sm-3">
				<div className="row">
					{this.state.user.map((subitem, i) =>

						<>
							{/* <ListGroup variant="flush">
								<ListGroup.Item>
									<Button className="col-sm-5 col-md-9" variant="light" size="lg" key={i} onClickCapture={(e) => this.props.userData(subitem.id, subitem.first_name, subitem.last_name, e)}
										value={subitem.first_name + "  " + subitem.last_name}>{subitem.first_name + "  " + subitem.last_name}</Button>
									<button className="btn btn-defualt col-sm-1 col-md-1" onClick={(e) => this.props.handleShow(subitem.id, e)}><FontAwesomeIcon icon={faEdit} /></button>
									<button className="btn btn-defualt col-sm-1 col-md-1" onClick={(e) => this.props.handleShowDelete(subitem.id, e)}><FontAwesomeIcon icon={faTrash} /></button>
								</ListGroup.Item>
							</ListGroup> */}
							<input type="button" className="btn btn-defualt col-sm-5 col-md-8" key={i} onClickCapture={(e) => this.props.userData(subitem.id, subitem.first_name, subitem.last_name, e)}
								value={subitem.first_name + "  " + subitem.last_name} /> 
								<button className="btn col-sm-1 col-md-2" onClick={(e) => this.props.handleShow(subitem.id, e)}><FontAwesomeIcon icon={faEdit} /></button>
								<button className="btn col-sm-1 col-md-2" onClick={(e) => this.props.handleShowDelete(subitem.id, e)}><FontAwesomeIcon icon={faTrash} /></button>						
							

						</>
					)}

					<button className="btn btn-defualt btn-add" onClick={(e) => this.props.handleShowAdd(e)} ><FontAwesomeIcon icon={faUserPlus} /></button>
				</div>
			</div>
		)
	}
}
export default UserList;