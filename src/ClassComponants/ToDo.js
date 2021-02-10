import React, {Component} from 'react'
import Task from '../Componants/Task'
import AddNewTask from '../ClassComponants/AddNewTask'

class ToDo extends Component {
    state = {
        tasks: [],
        inputValue: ''
    }
    handleCatchInput = ( tasks, inputValue ) => {
        this.setState(() => {
            return {
                inputValue: inputValue,
                tasks: this.state.tasks.push(this.state.inputValue)
            }
        })
    }




    render () {
        const {tasks} = this.state;
        console.log(tasks);
        return (
            <div className='todo'>
                <div className="todoTasksList">
                    {!this.state.tasks.length && <div>todos is empty</div>}
                    {this.state.tasks.map(task => <Task inputValue={task} />)}
                </div>
                <div>
                    <AddNewTask submit={this.handleCatchInput}/>
                </div>
            </div>

        )
    }
}

export default ToDo