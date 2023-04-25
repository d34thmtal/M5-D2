
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Jumbotron() {
    return (
        <Container fluid className="mt-5 mb-5">
            <Row>
                <Col xs={12}>
                    <h1>Hello, world!</h1>
                    <p>
                        This is a simple hero unit, a simple jumbotron-style component for calling
                        extra attention to featured content or information.
                    </p>
                    <p>
                        <Button variant="dark">Go somewhere</Button>
                    </p>
                </Col>
            </Row>
        </Container>
    );
}

export default Jumbotron;