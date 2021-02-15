import styles from './Task.module.css'

const Task = ( {inputValue, key} ) => {


    return (

        <div
            className={styles.task}
        >
            <div className={styles.taskP}>
                <p>{inputValue}</p>
            </div>
            <div className={styles.removeButtonDiv}>
                <button
                    className={styles.taskRemoveButton}
                >
                    Remove task
                </button>
            </div>
        </div>
    )
}

export default Task;