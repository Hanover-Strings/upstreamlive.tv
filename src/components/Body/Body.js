import React from 'react';
import { Column, Row } from 'simple-flexbox';


const Body = () => (
  <div>
  <Row flexGrow={1} className='Body'justifyContent='center' style={{ paddingTop: '24px', paddingBottom: '24px' }}>
    <Column horizontal="center" vertical='center'>
      <iframe className='youtube' width='853' height='505' src="https://www.youtube.com/embed/live_stream?channel=UCWK7I10nUKDRBv_stW8y61g" title='upstreamlive' frameBorder="0" allowFullScreen></iframe>
    </Column>
  </Row>
</div>
);

export default Body;