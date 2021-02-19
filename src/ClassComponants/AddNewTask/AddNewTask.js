import React from 'react';
import styles from './AddNewTask.module.css';

class AddNewTask extends React.Component {
    state = {
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
    handleS = () => {
        const {inputValue} = this.state;
        const { handleSubmit } = this.props;

        handleSubmit(inputValue)

        this.setState({
            inputValue: ''
        })
    }

    render() {
        const {inputValue} = this.state;


        return (
            <div className={styles.todoInput}>
                <input
                    type="text"
                    placeholder="Input ToDo"
                    onChange={this.handleChange}
                    value={inputValue}
                />
                <button
                    className={styles.addInput}
                    onClick={this.handleS}
                    disabled={!!!inputValue}
                >
                    Add
                </button>
                <button
                    className={styles.resetInput}
                    onClick={this.resetInput}
                    disabled={!!!inputValue}
                > Reset
                </button>
            </div>
        )
    }
}

export default AddNewTask