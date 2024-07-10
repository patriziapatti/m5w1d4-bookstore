import Alert from 'react-bootstrap/Alert';
import { useState } from 'react';

function Welcome() {
  const [show, setShow] = useState(true);
  if (show) {
    return (
      <Alert className='mt-3 mx-3' variant="primary" onClose={() => setShow(false)} dismissible>
        <Alert.Heading className='text-center'>Welcome to EPIBOOKS Bookstore!</Alert.Heading>
      </Alert>
    )
  }

}
export default Welcome;
