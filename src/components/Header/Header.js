import React from 'react';
import { Column, Row } from 'simple-flexbox';


import logo from  '../../UpstreamLiveLogo.png';
import name from  '../../name.png';



class Header extends React.Component {
  render() {
    return(
      <div>
        <Row justifyContent='center'>
          <Column horizontal="center" vertical='center' className='logo' flexGrow={1}>
            <embed src={logo} alt='logo' style={{ width: "90%", height: "auto", paddingTop: "24px" }} />
          </Column>
        </Row>
        <Row justifyContent='center'>
          <Column vertical='center'>
            <h3>Tune in right here on September 21, 2018 @7:30 PM EST
            </h3>
            <h4>A special livestreamed event with</h4>
          </Column>
        </Row>
        <Row justifyContent='center'>
          <Column vertical='center'>
            <a href='https://www.eliaskrell.com/'>
            <img src={name} alt='name' style={{ width: "100%", height: "auto", paddingTop: "24px", paddingBottom: '48px' }} />
            </a>
          </Column>
        </Row>
      </div>
    );
  }
}

export default Header;