import React, {Component} from 'react';
import Task from '../../FunctionComponents/Task/Task';
import AddNewTask from '../AddNewTask/AddNewTask';
import {Container, Row, Col} from 'react-bootstrap';
import IdGenerator from "../../IdGenerator/IdGenerator";

class ToDo extends Component {
    state = {
        tasks: []
    }
    handleSubmit = (value) => {
        if (!value) return;
        const tasks = [...this.state.tasks];
        tasks.push({
            id: IdGenerator(),
            text: value
        });
        this.setState({
            tasks
        });
    }


    render() {
        const { tasks }= this.state;

        const Tasks = tasks.map((task) => {
            return (
                <Col
                    key={IdGenerator()}
                    className='d-flex justify-content-center mt-3'
                    xs={12}
                    md={6}
                    xl={4}
                >
                    <Task
                        task={task}
                        key={IdGenerator()}
                    />
                </Col>
            )
        })

        return (
            <div>
                <Container>
                    <Row className='mt-3'>
                        <Col>
                            <div>
                                <AddNewTask handleSubmit={this.handleSubmit}/>
                            </div>
                        </Col>
                    </Row>
                    <Row className='mt-3'>
                        {!tasks.length && <div>todos is empty</div>}
                        {Tasks}
                    </Row>
                </Container>


            </div>

        )
    }
}

export default ToDo