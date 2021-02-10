const Task = ( {inputValue} ) => {
    return (
        <div className="task">
            <div className='taskP'>
                <p>{inputValue}</p>
            </div>
            <div className='removeButtonDiv'>
                <button
                    className='taskRemoveButton'
                >
                    Remove task
                </button>
            </div>
        </div>
    )
}

export default Task;