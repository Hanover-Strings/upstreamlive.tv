import React from 'react';
import { Col, Row, Container } from 'reactstrap';
import ResponsiveEmbed from 'react-responsive-embed';


const Body = () => (
        <Row className='Body'>
          <Col sm="12" md={{ size: 8, offset: 2 }} style={{paddingTop: "48px", paddingBottom: "48px"}}>
          {/* <iframe width="853" height="480"  src="https://www.youtube.com/embed/live_stream?channel=UCWK7I10nUKDRBv_stW8y61g" title='upstreamlive' frameBorder="0" allowFullScreen></iframe>     */}
          <ResponsiveEmbed src="https://www.youtube.com/embed/live_stream?channel=UCWK7I10nUKDRBv_stW8y61g" allowFullScreen />
          </Col>
        </Row>

);

export default Body;
