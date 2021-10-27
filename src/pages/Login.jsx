import React from 'react'
import {Link} from 'react-router-dom'
import {Card, Form, Button, Container} from 'react-bootstrap'

function Login() {
    return (
        <Container>
            <h1 className="text-center">LOGIN</h1> 
            <Card body>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <center>
                    <span>Daftar sebagai <Link to="/registration">Customer</Link> atau <Link to="/registration">Kontraktor</Link></span>
                    <br />
                    <Button className="mt-3" variant="primary" type="submit">
                        Login
                    </Button>
                </center>
                </Form>
            </Card> 
        </Container>
    )
}
export default Login