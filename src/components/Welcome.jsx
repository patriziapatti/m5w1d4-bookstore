import Alert from 'react-bootstrap/Alert';
import { useState } from 'react';
import { ThemeContext } from '../context/ThemeContextProvider';
import { useContext } from 'react';

function Welcome() {
  const {theme} = useContext(ThemeContext)
  const [show, setShow] = useState(true);
  if (show) {
    return (
      <Alert className={theme ==="light"?'mt-3 mx-3': 'bg-dark mt-3 mx-3' }  data-bs-theme={theme} variant="primary" onClose={() => setShow(false)} dismissible>
        <Alert.Heading className='text-center'>Welcome to EPIBOOKS Bookstore!</Alert.Heading>
      </Alert>
    )
  }

}
export default Welcome;
