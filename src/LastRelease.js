import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Books from './fantasy.json';

function CardsProd() {
  return (
    <Container fluid className="d-flex">
      <Row className="row-cols-1 row-cols-md-2 row-cols-lg-3">
        {Books.map((elem, i) => (
          <Col key={i} xs={12} md={4} lg={3}>
            <Card className="h-75 shadow">
              <Card.Img className="p-3 h-50" variant="top" src={elem.img} />
              <Card.Body className="d-flex flex-column">
                <Card.Title className="p-3 m-2">{elem.title}</Card.Title>
                <div>
                  <Card.Text>
                    {elem.category}
                  </Card.Text>
                  <Card.Text>
                    {elem.asin}
                  </Card.Text>
                  <Card.Text>
                    € {elem.price}
                  </Card.Text>
                  <Button variant="dark">Acquista</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

function LastRelease() {
  return (
    <Container>
      <CardsProd />
    </Container>
  )
}

export default LastRelease;

