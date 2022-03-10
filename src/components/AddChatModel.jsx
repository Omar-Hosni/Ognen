import React, { Component } from "react";
import { Modal, Col, Row, Form, Button } from "react-bootstrap";
import { FormControl, FormGroup, FormLabel } from "react-bootstrap";

export class AddChatModel extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePatternsClick = this.handlePatternsClick.bind(this);

    this.state = {
      patterns: "",
      displaypatterns: [],
      intent: [],
    };
  }
  fetchData = () => {
    fetch('http://127.0.0.1:8000/intents/')
      .then(response => response.json())
      .then((data) => {
        this.setState({
          intent: data
        });
        console.log(data);
      })
  };
  componentDidMount() {
    this.fetchData();
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch("http://127.0.0.1:8000/history/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: null,
        tag: event.target.tag.value,
        patterns: event.target.patterns.value,
        responses: event.target.responses.value,
      }),
    })
      .then((response) => response.json())
      .then(
        (result) => {
          alert(result);
        },
        (error) => {
          alert("Failed");
        }
      );
  }

  handlePatternsClick() {
    this.setState({
      displaypatterns: [...this.state.displaypatterns, this.state.patterns],
    });
    this.setState({ patterns: "" });
  }

  render() {
    const { intent } = this.state;
    return (
      <div className="container">
        <Modal
          {...this.props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Fill In a Chat Model
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Col sm={6}>
                <Form onSubmit={this.handleSubmit}>
                  <Form.Group controlId="tag">
                    <Form.Label>Name of the Intent</Form.Label>
                    <Form.Select >
                      <option>select an intent</option>
                      {intent.map((intent) =>
                        <option>{intent.tag}</option>
                      )}
                    </Form.Select>

                  </Form.Group>
                  <Form.Group controlId="patterns">
                    <Form.Label>Training Phrases</Form.Label>
                    <Form.Control
                      type="text"
                      name="patterns"
                      value={this.state.displaypatterns}
                      required
                      placeholder=""
                      readOnly
                    />
                    <div style={{ display: "flex", margin: "8px" }}>
                      <input
                      placeholder="input phrases and add"
                        type="text"
                        style={{
                          display: "block",
                          width: "100%",
                          padding: "0.375rem 0.75rem",
                          fontSize: "1rem",
                          fontWeight: "400",
                          lineHeight: "1.5",
                          color: "#212529",
                          backgroundColor: "#fff",
                          backgroundClip: "padding-box",
                          border: "1px solid #ced4da",
                          appearance: "none",
                          borderRadius: "0.25rem",
                          transition:
                            "border-color .15s ease-in-out,box-shadow .15s ease-in-out",
                        }}
                        value={this.state.patterns}
                        onChange={(e) =>
                          this.setState({ patterns: e.target.value })
                        }
                      />
                      <Button
                        variant="primary"
                        type=""
                        onClick={this.handlePatternsClick}
                      >
                        Add
                      </Button>
                    </div>
                  </Form.Group>
                  <Form.Group controlId="responses">
                    <Form.Label>Responses</Form.Label>
                    <Form.Control
                      type="text"
                      name="responses"
                      required
                      placeholder=""
                    />
                  </Form.Group>
                  <Form.Group>
                    <p></p>
                    <Button variant="primary" type="submit">
                      Submit
                    </Button>
                  </Form.Group>
                </Form>
              </Col>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" type="submit" onClick={this.props.onHide}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
