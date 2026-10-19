import React from 'react'
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div>
            <Navbar sticky='top' bg="dark" variant="dark" expand="lg" className="mb-4 px-3">
                <Container fluid>
                    {/* Logo nằm góc trái */}
                    <Navbar.Brand as={Link} to="/">ProductStore</Navbar.Brand>

                    {/* Nút Hamburger toggler cho màn hình nhỏ */}
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />

                    {/* Các menu liên kết bên phải */}
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                        <Nav>
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="/products">Products</Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header
