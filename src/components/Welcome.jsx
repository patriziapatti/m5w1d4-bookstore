import Alert from 'react-bootstrap/Alert';
import { useState } from 'react';
// import Button from 'react-bootstrap/Button';

function Welcome(){
    const [show, setShow] = useState(true);
    if (show) {
    return(
        <Alert className='mt-3 mx-3' variant="primary" onClose={() => setShow(false)} dismissible>
        <Alert.Heading className='text-center'>Welcome to EPIBOOKS Bookstore!</Alert.Heading>
      </Alert>
        
        //   <Alert primary className='mx-3 text-center'>
        //    Welcome to EPIBOOKS Bookstore!!!
        //   </Alert>
      
    )
} 
// return <Button className='ms-3 mt-3 d-none' onClick={() => setShow(true)}>Mostra Welcome</Button>;
}
export default Welcome;
