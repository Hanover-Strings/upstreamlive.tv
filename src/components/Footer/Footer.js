import React from 'react';
import { Container, Col, Row } from 'reactstrap';
import FontAwesome from 'react-fontawesome';

import strings from  '../../strings.png';


const Footer = () => (
      <Row className="Footer" style={{ paddingBottom: "24px", paddingTop: "24px" }}>
        <Col>
            <h6>presented with love by</h6>
            <embed src={strings} alt='hanoverstrings' style={{ width: "40%", height: "auto", paddingTop: "24px" }} />
        </Col>
        <Col xs='12' sm='12' md='6'>
          <h3 style={{ color:"red", paddingTop:'12px'}}>Audio Version</h3>
          <h1 style={{ color:"red", paddingTop:'12px'}}><i class="fas fa-volume-up"></i></h1>
        </Col>
      </Row>      
);

export default Footer;