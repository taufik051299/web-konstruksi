import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
// COMPONENTS
import CarouselHome from '../components/CarouselHome'


function Home() {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
                </Container>
            </Navbar>
            <Container>
                <CarouselHome/>
            </Container>
        </>
    )
}

export default Home
