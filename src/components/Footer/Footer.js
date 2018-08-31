import React from 'react';
import { Container, Col, Row } from 'reactstrap';

import strings from  '../../strings.png';


const Footer = () => (
  <Container className="Footer">
      <Row style={{ paddingBottom: "24px", paddingTop: "24px" }}>
        <Col>
            <embed src={strings} alt='hanoverstrings' style={{ width: "15%", height: "auto", paddingTop: "24px" }} />
        </Col>
        <Col>
          Audio Version
        </Col>
      </Row>      
  </Container>
);

export default Footer;