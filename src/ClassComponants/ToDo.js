import React, {Component} from 'react'
import Task from '../Componants/Task'

class ToDo extends Component {
    state = {
        tasksList: ["Task 1", "Task 2", "Task 3"]
    }

    render () {
        return (
            <div>
                <div className="todoTasksList">
                    {this.state.tasksList.map((task) => <Task todoTask={task}/> )}
                </div>
                <div className="todoInput">
                    <input type="text" placeholder="Input ToDo"/>
                    <button> Add </button>
                </div>
            </div>

        )
    }
}

export default ToDo