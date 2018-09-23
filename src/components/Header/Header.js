import React from 'react';
import { Col, Row } from 'reactstrap';


import logo from  '../../logo.svg';


class Header extends React.Component {
  render() {
    return(
        <Row className='App-header' justifyContent='center'>
          <Col xs="12" horizontal="center" vertical='center' className='logo'>
            <embed src={logo} alt='logo' style={{ width: "45%", height: "auto", paddingTop: "24px" }} />
          </Col>
          <Col xs='12'>
            <h4 className='next-up'>
              Tune In October 19 @ 7:30 for a livestream with <a href='https://www.facebook.com/dunehuntersounds/'>Dunehunter</a>
            </h4>
            <h4 className='next-up'>
              Until then, enjoy some previous Upstreams...
            </h4>
          </Col>
        </Row>
    );
  }
}

export default Header;