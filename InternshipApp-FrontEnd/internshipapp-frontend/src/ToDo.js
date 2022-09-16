import axios from "axios";
import React, { Component } from "react";
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button'



export class ToDo extends Component {
    constructor(props) {
        super(props)

        this.state = {
            toDoName: '',
            toDoDescription: ''
        }
    }

    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submitHandler = e => {
        e.preventDefault();
        console.log(this.state)
        axios.post('https://localhost:7230/api/AddToDo', this.state)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        const { toDoName, toDoDescription } = this.state
        return (
            <form onSubmit={this.submitHandler}>
                <div>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="To Do Name"
                        className="mb-3"
                        style={{ width: '400px', marginTop: '10px'}}
                    >
                        <Form.Control type="text" name="toDoName" placeholder="" value={toDoName} onChange={this.changeHandler} />
                    </FloatingLabel>
                </div>
                <div>
                    <FloatingLabel controlId="floatingTextarea2" label="Description">
                        <Form.Control
                            as="textarea"
                            placeholder="Leave a comment here"
                            name="toDoDescription"
                            value={toDoDescription}
                            onChange={this.changeHandler}
                            style={{ height: '100px', width: '400px', marginBottom: '10px' }}
                        />
                    </FloatingLabel>
                </div>
                
                <Button type="submit" variant="primary">Save</Button>{' '}
            </form>

        )
    }
}