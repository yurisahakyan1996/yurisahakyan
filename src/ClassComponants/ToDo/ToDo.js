import React, {Component} from 'react'
import Task from '../../FunctionComponents/Task/Task'
import AddNewTask from '../AddNewTask/AddNewTask'
import styles from './ToDo.module.css'

class ToDo extends Component {
    state = {
        tasks: []
    }
    handleSubmit = ( value ) => {
        if(!value) return;
        const tasks = [...this.state.tasks];
        tasks.push(value);
        this.setState({
            tasks
        });
    }




    render () {
        const {tasks} = this.state;
        console.log(tasks);
        return (
            <div className={styles.todo}>
                <div className={styles.todoTasksList}>
                    {!this.state.tasks.length && <div>todos is empty</div>}
                    {this.state.tasks.map((task, index) => <Task inputValue={task} key={index}/>)}
                </div>
                <div>
                    <AddNewTask handleSubmit={this.handleSubmit}/>
                </div>
            </div>

        )
    }
}

export default ToDo