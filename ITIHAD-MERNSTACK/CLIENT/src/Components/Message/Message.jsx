import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Message(props) {
    const {message} = props
  const [smShow, setSmShow] = useState(true); 

  return (
    <>
    
      <Modal
        size="sm"
        show={smShow}
        onHide={() => setSmShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton >
           <h6 className='text-danger text-lowercase'> {message}</h6>
        </Modal.Header> 
      </Modal>
    </>
  );
}

export default Message;