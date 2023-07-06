import { useState } from 'react';
import Loading from "../../Components/Loading/Loading"
import Modal from 'react-bootstrap/Modal';
import {BsFillImageFill} from "react-icons/bs"
function UpdateForm(props) {
    const [message , setMessage] = useState("")
    const [loading , setLoading] = useState(false)
    const [show, setShow] = useState(true);
    const [imgLoading, setImgLoading] = useState(false)
    const handleClose = () => setShow(false); 
    const { _id , name, email , phone, image , roll , profession } = props.memberInfo
    const [updateAdmin, setUpdateAdmin] = useState({
        name,
        email,
        phone,
        image,
        roll, 
        profession,
    })
    
const handleUpdateChange = (e)=>{
    setUpdateAdmin({...updateAdmin, [e.target.name]:e.target.value})
}

const handleFileChange = async (e) => {
    setImgLoading(true)
    const file = e.target.files[0];
    const formData = new FormData()
    formData.append("file", file)
    formData.append("upload_preset", "shopUp")
    formData.append("cloud_name", "dhivoejt4")
    const res = await fetch("https://api.cloudinary.com/v1_1/dhivoejt4/image/upload", {
        method: "POST",
        body: formData
    });

    const data = await res.json()
    setImgLoading(false)
    const imageUrl = data.secure_url
    setUpdateAdmin((preUser) => ({
        ...preUser,
        image: imageUrl
    }))
}
const handleUpdateSubmit= (e, id)=>{
    setLoading(true)
    e.preventDefault() 
    fetch(`https://itihad.onrender.com/api/update-user/${id}`, {
        method : "PUT",
        headers : {
            "Content-Type": "application/json"
        },
        body : JSON.stringify(updateAdmin)
    }).then(res => res.json())
    .then(data => {
        setMessage(data.message) 
        setLoading(false)
        setTimeout(() => {
            setShow(false)
        }, 1500);
    })
}
    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Update Now</Modal.Title>
                </Modal.Header>
                <Modal.Body className='bg-dark'>
                    <form onSubmit={(e) => handleUpdateSubmit(e, _id)}>
                        <h6 className='text-light'>Name</h6>
                        <input onChange={handleUpdateChange} className='form-control formInput mt-2' type="text" name='name' value={updateAdmin.name}  placeholder='Name' />
                        <h6 className='text-light mt-2'>Email</h6>
                        <input onChange={handleUpdateChange} className='form-control formInput mt-2' type="email" name='email' value={updateAdmin.email}  placeholder='Email' />
                        <h6 className='text-light mt-2'>Phone</h6>
                        <input onChange={handleUpdateChange} className='form-control formInput mt-2' type="number" name='phone' value={updateAdmin.phone}  placeholder='Phone' />
                        <h6 className='text-light mt-2'>Profession</h6>
                        <input onChange={handleUpdateChange} className='form-control formInput mt-2' type="text" name='profession' value={updateAdmin.profession}  placeholder='profession' />
                    <input onChange={handleFileChange} className='d-none' type="file" id='file' name='image' />
                    <div className="formLable mt-3">
                        <label htmlFor="file"><BsFillImageFill className='fileIcon text-light' /></label>
                        {imgLoading ?
                            <>  <div style={{ margin: "10px" }} className="spinner-border text-light" role="status"> </div>
                                <span className='text-light'>image uploading . . .</span>
                            </>
                            : <h6 className='text-light'>Update Image</h6>
                        }
                    </div>

                <h6 className='text-center my-2 text-light'>{message}</h6>
                {loading && <Loading/>}
                        <button type='submit' className='btn btn-sm btn-success my-4'>Update</button>
                    </form>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default UpdateForm;