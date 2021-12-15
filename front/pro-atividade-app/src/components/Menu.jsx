import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

export const Menu = () => {
    return (
        <Navbar bg="dark" expand="lg" variant='dark'>
            <Container>
                <Navbar.Brand href="#home">React</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Clientes</Nav.Link>
                        <Nav.Link href="#link">Atividade</Nav.Link>
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

