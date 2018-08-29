import React from 'react';
import { Column, Row } from 'simple-flexbox';

import strings from  '../../strings.png';


const Footer = () => (
  <div className="Footer">
      <Row flex={1} justifyContent='space-between'style={{ paddingBottom: "24px" }}>
        <Column>
            <embed src={strings} alt='hanoverstrings' style={{ width: "15%", height: "auto", paddingTop: "24px" }} />
        </Column>
        <Column>
          Audio Version
        </Column>
      </Row>      
  </div>
);

export default Footer;