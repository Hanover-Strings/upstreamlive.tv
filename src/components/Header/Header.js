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
        </Row>
    );
  }
}

export default Header;