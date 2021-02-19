import React, {Component} from 'react';
import Task from '../../FunctionComponents/Task/Task';
import AddNewTask from '../AddNewTask/AddNewTask';
import styles from './ToDo.module.css';
import { Container, Row, Col } from 'react-bootstrap';
import IdGenerator from "../../IdGenerator/IdGenerator";

class ToDo extends Component {
    state = {
        tasks: []
    }
    handleSubmit = ( value ) => {
        if(!value) return;
        const tasks = [...this.state.tasks];
        tasks.push({
            id: IdGenerator(),
            text: value
        });
        this.setState({
            tasks
        });
    }




    render () {
        return (
            <div>
                <div>
                    <AddNewTask handleSubmit={this.handleSubmit}/>
                </div>
                <Container>
                    <Row className='justify-content-center'>
                        <div className={styles.todoTasksList}>
                            {!this.state.tasks.length && <div>todos is empty</div>}
                            {this.state.tasks.map((task, index) => (
                                <Col key={index} className='mt-3'>
                                    <Task inputValue={task.text} />
                                </Col>
                            ))}
                        </div>
                    </Row>
                </Container>


            </div>

        )
    }
}

export default ToDo