import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

function Footer() {
    return (
        <footer>
            <Container>
                <Row>
                    <Col className="text-center py-3">Copyright &copy; REMINISE TRADITION</Col>
                </Row>
                <Row>
                    <Col className="text-center py-3">CSE5-AZ-DEV-ASSOC18</Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer
