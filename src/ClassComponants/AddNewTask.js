import React from 'react'

class AddNewTask extends React.Component {
    state = {
        tasks: [],
        inputValue: ''
    }
    handleChange = (e) => {
        this.setState({
            inputValue: e.target.value
        })
    }
    resetInput = () => {
        this.setState({
            inputValue: ''
        })
    }
    handleSubmit = (e) => {
        const {submit} = this.props;
        const {tasks, inputValue} = this.state;
        this.setState({
            tasks: this.state.tasks.push(inputValue)
        })
        submit(tasks);
    }


    render() {
        const { inputValue } = this.state

        return (
            <div className='todoInput'>
                <input
                    type="text"
                    placeholder="Input ToDo"
                    onChange={this.handleChange}
                    value={inputValue}
                />
                <button
                    className="addInput"
                    onClick={this.handleSubmit}
                >
                    Add
                </button>
                <button
                    className="resetInput"
                    onClick={this.resetInput}
                > Reset
                </button>
            </div>
        )
    }
}

export default AddNewTask