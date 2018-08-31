import React from 'react';
import { Container, Col, Row } from 'reactstrap';


import logo from  '../../logo.svg';


class Header extends React.Component {
  render() {
    return(
      <div>
        <Row justifyContent='center'>
          <Col xs="12" horizontal="center" vertical='center' className='logo' flexGrow={1}>
            <embed src={logo} alt='logo' style={{ width: "45%", height: "auto", paddingTop: "24px" }} />
          </Col>
        </Row>
      </div>
    );
  }
}

export default Header;