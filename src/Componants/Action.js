const Action = ({ handlePlusCount, handleMinusCount}) => {
    return (
        <div>
            <button onClick={handlePlusCount} className='butt'> Plus </button>
            <button onClick={handleMinusCount} className='butt'> Minus </button>
        </div>
    )
}

export default Action

































