import { useState } from 'react';
import { useContext } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { AiFillDelete, AiFillEdit } from "react-icons/ai"
import { adminLoginContext } from '../../App';
import UpdateForm from '../UpdateForm/UpdateForm';
import "./Member.css"
function BasicExample(props) {
    const [show , setShow] = useState(false) 
    const [adminLogin] = useContext(adminLoginContext)
    const { name, email, image, profession, phone, roll, _id } = props.member;
     
 
    return (
        <div className='merberCard col-md-4 col-sm-6'>
            <Card>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title className='text-lowercase'><span className='text-primary'>Name</span> : {name}</Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>Profession : {profession}</ListGroup.Item>
                    <ListGroup.Item>Role : {roll}</ListGroup.Item>
                    <ListGroup.Item>Phone : {"0"+ phone}</ListGroup.Item>
                    <ListGroup.Item>E-mail : {email}</ListGroup.Item>
                </ListGroup>
            {  adminLogin === "admin"  &&  <Card.Body className='cardBody'>
                    <AiFillDelete onClick={()=>props.handleDeleteUser(_id)} className="cardIcons" />
                    <AiFillEdit onClick={()=> setShow(!show)} className="cardIcons" />
                </Card.Body> }
            </Card>

        {  show &&
           <UpdateForm 
             memberInfo = {props.member} 
           />
        }

        </div>
    );
}

export default BasicExample;