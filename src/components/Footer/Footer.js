import React from 'react';
import { Col, Row } from 'reactstrap';

import strings from  '../../strings.png';


const Footer = () => (
      <Row className="Footer" style={{ paddingBottom: "24px", paddingTop: "24px" }}>
        <Col>
            <h6>presented with love by</h6>
            <a href='https://hanoverstrings.com/'><embed src={strings} alt='hanoverstrings' style={{ width: "40%", height: "auto", paddingTop: "24px" }} /></a>
        </Col>
        <Col xs='12' sm='12' md='6'>
          <h3 style={{ color:"red", paddingTop:'12px'}}>Audio Version   <i class="fas fa-volume-up"></i></h3>
          {/* fix this stream origin!!! */}
          <audio src="http://$STREAMURL:8000/stream"  autoplay="false" controls="true"></audio>
        </Col>
      </Row>      
);

export default Footer;