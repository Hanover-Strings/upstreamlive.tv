import React from 'react';
import { Column, Row } from 'simple-flexbox';


import logo from  '../../logo.svg';


class Header extends React.Component {
  render() {
    return(
      <div>
        <Row justifyContent='center'>
          <Column horizontal="center" vertical='center' className='logo' flexGrow={1}>
            <embed src={logo} alt='logo' style={{ width: "30%", height: "auto", paddingTop: "24px" }} />
          </Column>
        </Row>
      </div>
    );
  }
}

export default Header;