const Hello = () => {
    let name = prompt("Please write your name");

    return (
        <h1 style={{textAlign: 'center'}}> Hello {name} </h1>
    )
}

export default Hello;