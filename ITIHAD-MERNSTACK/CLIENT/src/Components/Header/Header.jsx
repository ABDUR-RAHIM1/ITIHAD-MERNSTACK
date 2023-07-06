import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'; 
import { useEffect, useState } from 'react';
import { GrUserAdmin } from 'react-icons/gr'
import { AiOutlineLogout } from 'react-icons/ai'
import './Header.css';
import logo from '../../image/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { adminLoginContext } from '../../App';

function Header() {
    const navigate = useNavigate() 
    const [adminLogin ,setAdminLogin] = useContext(adminLoginContext)
    const [navbarExpanded, setNavbarExpanded] = useState(false);
    const handleNavItemClick = () => {
        setNavbarExpanded(false);
    };
    
    const handleLogOut = ()=>{
        console.log("log out")
          localStorage.removeItem("admin")
         setTimeout(() => {
            navigate("/admin-login")
         }, 1000);
    }
    useEffect(()=>{
        const admin = JSON.parse(localStorage.getItem("admin")) 
       if (admin) {
            setAdminLogin(admin)
       }else{
           setAdminLogin("")
       }
    } ,[handleLogOut]) 

  
    console.log(adminLogin)
    return (
        <div className="header sticky-top">
            <Navbar expand="lg" className="headerBg" expanded={navbarExpanded}>
                <Container>
                    <Navbar.Brand>
                        <Link to="/">
                            <img className="logo" src={logo} alt="" />
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle
                        aria-controls="navbarScroll"
                        onClick={() => setNavbarExpanded(!navbarExpanded)}
                    />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '200px' }} navbarScroll>
                         { adminLogin ?  <Nav.Link as={Link} to="/dashboard" onClick={handleNavItemClick}>
                                Dashboard
                            </Nav.Link> : null}
                            <Nav.Link as={Link} to="/blogs" onClick={handleNavItemClick}>
                                blog
                            </Nav.Link>
                            <Nav.Link as={Link} to="/members" onClick={handleNavItemClick}>
                            MEMBERS
                            </Nav.Link>
                            <Nav.Link as={Link} to="/donar-info" onClick={handleNavItemClick}>
                            donation
                            </Nav.Link>
                            <Nav.Link href="https://web.facebook.com/messages/t/?link_hash=AbbsF0U-hx_H8Mtx&_rdc=1&_rdr" target="_blank">join</Nav.Link>
                            <Nav.Link as={Link} to="/signup" onClick={handleNavItemClick}>
                                <span className='text-primary'>sign up</span>
                            </Nav.Link>
                        </Nav>

                        <Form className="d-flex">
                            <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" />
                            <Button disabled variant="outline-success">Search</Button>
                        </Form>
                        <div className="admin">
                        { adminLogin ?
                          <AiOutlineLogout onClick={handleLogOut} className='adminIcon'/>
                           :   
                            <Link to='/admin-login'>
                                <GrUserAdmin onClick={handleNavItemClick} className='adminIcon' />
                            </Link>
                        }
                            <h6 className='text-success cursor-pointer'>{`${adminLogin ? "log Out"  : adminLogin}`}</h6>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default Header;
