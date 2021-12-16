import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export const Menu = () => {
    return (
        <Navbar bg="dark" expand="lg" variant='dark'>
            <Container>
                <Navbar.Brand as={NavLink} to="/home">React</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={NavLink} to="/clientes">Clientes</Nav.Link>
                        <Nav.Link as={NavLink} to="/atividades">Atividade</Nav.Link>
                    </Nav>
                    <Nav>
                        <NavDropdown align="end" title="Antonio" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action1">Perfil</NavDropdown.Item>
                            <NavDropdown.Item href="#action2">Configutações</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action3">Sair</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

