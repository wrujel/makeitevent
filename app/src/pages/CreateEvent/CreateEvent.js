import { Container, Row, Col, Card, Form } from "react-bootstrap";

function CreateEvent() {
  return (
    <Container>
      <Row>
        <Col lg={4}>
          <Card border="info" style={{ width: "18rem" }}>
            <Card.Header>Header</Card.Header>
            <Card.Body>
              <Card.Title>Información sobre tu evento</Card.Title>
              <Card.Text>
                Cubramos información básica sobre tu primer evento en
                Makeitevent
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={8}>
          <Form>
            <Row>
              <Form.Label>Nombre del Evento</Form.Label>
              <Form.Control type="text" placeholder="Title" />
            </Row>

            <Row>
              <Form.Label>Lugar del Evento</Form.Label>
              <Form.Control type="text" placeholder="location" />
            </Row>
            <Row>
              <Form.Label>About event</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="About" />
            </Row>

            <Row>
              <Col>
                <Row>
                  {" "}
                  <Form.Label>Fecha del evento</Form.Label>
                </Row>
                <Row>
                  <Form.Control
                    size="sm"
                    type="date"
                    placeholder="Small text"
                  />
                </Row>
                <Row>
                  <Form.Control
                    size="sm"
                    type="date"
                    placeholder="Small text"
                  />
                </Row>
              </Col>

              <Col>
                <Row>
                  <Form.Label>Hora del evento</Form.Label>
                </Row>
                <Row>
                  <Form.Control
                    size="sm"
                    type="time"
                    placeholder="Small text"
                  />
                </Row>
                <Row>
                  <Form.Control
                    size="sm"
                    type="time"
                    placeholder="Small text"
                  />
                </Row>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default CreateEvent;
