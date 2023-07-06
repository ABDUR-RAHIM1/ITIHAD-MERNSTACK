import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {BsFillImageFill} from "react-icons/bs"
import Loading from '../Loading/Loading';

function BlogUpdate(props) {
    const { title, desc, image, _id } = props.blog
    const [show, setShow] = useState(true);
    const handleClose = () => setShow(false);

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Blog</Modal.Title>
                </Modal.Header>
                <Modal.Body className='bg-dark'>
                    <form onSubmit={(e) => props.handleEditBlog(e, _id)}>
                        <h6 className='mt-2 text-light '>Title</h6>
                        <input onChange={(e) => props.handleChange(e)} 
                            className='form-control my-3'
                            type="text"
                            name='title'
                            placeholder='Title'
                            />
                            
                        <h6 className='mt-2 text-light '>Description</h6>
                        <textarea onChange={(e) => props.handleChange(e)} 
                            className='form-control my-3'
                            type="text"
                            name='desc'
                            placeholder='Description'
                             />
                        <input onChange={(e)=>props.handleFileChange(e)} className='d-none' type="file" id='file' name='image' />
                    <div className="formLable mt-3">
                        <label htmlFor="file"><BsFillImageFill className='fileIcon text-light' /></label>
                        {props.imgLoading ?
                            <>  <div style={{ margin: "10px" }} className="spinner-border text-light" role="status"> </div>
                                <span className='text-light'>image uploading . . .</span>
                            </>
                            : <h6 className='text-light'>Update Image</h6>
                        }
                    </div>
                        <button className='btn btn-success mt-3'>Update</button>
                        {
                            props.loading && <Loading/>
                        }
                         <span className='text-center text-light'> <h6>{props.message}</h6></span>
                    </form>


                </Modal.Body>
            </Modal>
        </>
    );
}

export default BlogUpdate;