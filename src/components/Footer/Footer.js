import React from 'react';
import { Col, Row } from 'reactstrap';

import strings from  '../../PWLBHS WH.svg';


const Footer = () => (
      <Row className="Footer" style={{ paddingBottom: "24px", paddingTop: "24px" }}>
        <Col xs={{size: 12, order: 2}} sm={{size: 12, order: 2}} md={{size: 6, order: 1}}>
            <a href='https://hanoverstrings.com/'>
              <img src={strings} alt='hanoverstrings' style={{ width: "40%", height: "auto", paddingTop: "24px" }} />
            </a>
            <h3 style={{ paddingTop:'12px'}}>
             <a href='https://www.instagram.com/hanoverstrings/'><i style={{ paddingLeft:'24px', paddingRight:'24px', color:'white' }}  class="fab fa-instagram"></i></a>
             <a href='https://www.facebook.com/HanoverStrings/'><i style={{ paddingLeft:'24px', paddingRight:'24px', color:'white' }} class="fab fa-facebook-square"></i></a>
             <a href='https://www.twitter.com/hanoverstrings/'><i style={{ paddingLeft:'24px', paddingRight:'24px', color:'white' }}  class="fab fa-twitter"></i></a>
            </h3>
        </Col>
        <Col xs={{size: 12, order: 1}} sm={{size: 12, order: 1}} md={{size: 6, order: 2}}>
          <a href='http://testing123.upstreamlive.tv'><h3 style={{ color:"red", paddingTop:'12px'}}>Audio Only Version  <i class="fas fa-volume-up"></i></h3></a>
        </Col>

      </Row>      
);

export default Footer;