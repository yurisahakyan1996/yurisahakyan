import {Card, Button, Form} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons';

const Task = ( {task } ) => {
    return (

        <div>
            <Card className="text-center" style={{ width: '18rem' }}>
                <Form className='d-flex justify-content-lg-start m-1'>
                    {['checkbox'].map((type) => (
                        <div className="mb-3">
                            <Form.Check
                                type={type}
                            />
                        </div>
                    ))}
                </Form>
                <Card.Body>
                    <Card.Title>{task.text.slice(0, 10)}</Card.Title>
                    <Card.Text>
                        {task.text}
                    </Card.Text>
                    <Button variant="danger" size='sm'>
                        <FontAwesomeIcon icon={faTrashAlt} />
                    </Button>
                    <Button variant="warning" size='sm'>
                        <FontAwesomeIcon icon={faEdit} />
                    </Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Task;