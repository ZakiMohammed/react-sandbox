import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { FaReact } from 'react-icons/fa'

const Header = () => {
    return (
        <Navbar bg="info" expand="lg" variant="dark" className='py-4'>
            <Container>
                <Navbar.Brand as={NavLink} to="/">
                    <FaReact size={30} className='me-2' />
                    React Sandbox
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={NavLink} to="/" state={ { title: 'Home' } }>Home</Nav.Link>
                        <NavDropdown title="useRef" id="basic-nav-dropdown" align="end">
                            <NavDropdown.Item as={NavLink} to="/useref-1">useRef 1</NavDropdown.Item>
                            <NavDropdown.Item as={NavLink} to="/useref-2">useRef 2</NavDropdown.Item>
                            <NavDropdown.Item as={NavLink} to="/useref-3">useRef 3</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link as={NavLink} to="/usememo">useMemo</Nav.Link>
                        <Nav.Link as={NavLink} to="/usecallback">useCallback</Nav.Link>
                        <NavDropdown title="Custom Hooks" id="basic-nav-dropdown" align="end">
                            <NavDropdown.Item as={NavLink} to="/custom-hook-1" state={ { title: 'Hook 1' } }>Hook 1</NavDropdown.Item>
                            <NavDropdown.Item as={NavLink} to="/custom-hook-2">Hook 2</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header
