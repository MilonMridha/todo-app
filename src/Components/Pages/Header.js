import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import CustomLink from './CustomLink';
import { useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';
import './Header.css'



const Header = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    const logout = () => {
        signOut(auth);
        navigate('/login');
    };
    return (
        <div>
            <Navbar className='rounded p-0 header' sticky='top' bg="" expand="lg">
                <Container>
                    <Navbar.Brand href="#home" className='text-light' > <h2> My Todo App</h2> </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className=''>


                        <Nav className="ms-auto">
                            <CustomLink className='text-light ms-3' to="/"  >Todo</CustomLink>

                            <CustomLink to="/blogs" className='ms-3 text-light'>Blogs</CustomLink>


                            {user ?
                                <>
                                    
                                    <Button onClick={logout} className='btn btn-danger rounded-pill p-1 ms-2 text-decoration-none'>SignOut</Button>
                                </>

                                :
                                <CustomLink to="/login" className='ms-3 text-light'>Login</CustomLink>

                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;