import React from 'react';
import './App.css';
import { Button } from 'react-bootstrap';
import { Modal, Form, Row, Col } from 'react-bootstrap';
class AddUserDetail extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			user_more: [],
			...this.props.data
		}
	}
	render() {
		const { handleClose } = this.props
		return (
			<>
				<Modal show={this.props.statusAdd} onHide={handleClose}>
					<Modal.Header closeButton>
						<Modal.Title>Add</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<Form>
							<Row>
								<Col>
									<Form.Control placeholder="First name" name="first_name" onChange={(e) => this.props.handleShowAdd(e)} />
								</Col>
								<Col>
									<Form.Control placeholder="Last name" name="last_name" onChange={(e) => this.props.handleShowAdd(e)} />
								</Col>
							</Row>
							<br />
							<Row>
								<Col>
									<Form.Control placeholder="Enter email" name="email" onChange={(e) => this.props.handleShowAdd(e)} />
								</Col>
							</Row>
						</Form>
					</Modal.Body>
					<Modal.Footer>
						<Button variant="secondary" onClick={handleClose}>
							Close
							</Button>
						<Button variant="primary" onClick={handleClose}>
							Add User
							</Button>
					</Modal.Footer>
				</Modal>
			</>
		)
	}
}
export default AddUserDetail;
