import axios from "axios";
import React, { Component } from "react";
import { Table } from "react-bootstrap";

export class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            todos: [],
        }
    }

    refreshList() {
        fetch("https://localhost:7230/api/GetAllToDos")
            .then(response => response.json())
            .then(data => {
                this.setState({ todos: data })
            });
    }

    componentDidMount() {
        this.refreshList();
    }

    componentDidUpdate() {
        this.refreshList();
    }

    getDetails(id) {
        axios.get('https://localhost:7230/api/GetToDo/' + id)
            .then(res => console.log(res.data)).catch(err => console.log(err))
    }

    render() {
        const { todos } = this.state;
        return (

            <div>
                <Table className="mt-4" striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {todos.map(todo =>
                            <tr key={todo.id} onClick={(e) => this.getDetails(todo.id)}>
                                <td>{todo.toDoName}</td>
                                <td>{todo.toDoDescription}</td>
                            </tr>
                        )}

                    </tbody>
                </Table>
            </div>
        )
    }
}

