import {Card, Button} from 'react-bootstrap'

const Task = ( {inputValue, key} ) => {


    return (

        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{inputValue.slice(0, 10)}</Card.Title>
                    <Card.Text>
                        {inputValue}
                    </Card.Text>
                    <Button variant="danger" size='sm'> DELETE </Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Task;