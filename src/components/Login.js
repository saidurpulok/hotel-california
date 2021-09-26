import React, { useRef, useState, useEffect } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import { Container } from "reactstrap";


export default function Login() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const { login } = useAuth()
    const [error, setError ] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useHistory()
    const _isMounted = useRef(true); // Initial value _isMounted = true

    useEffect(() => {
        return () => { // ComponentWillUnmount in Class Component
            _isMounted.current = false;
        }
    }, []);


    async function handleSubmit(e) {
        e.preventDefault()
        if (_isMounted.current) {
            try {
                if (_isMounted.current)
                setError("")
                setLoading(true)
                await login(emailRef.current.value, passwordRef.current.value)
                history.push("/")            
            } catch {
                setError('Failed to login')
            }
            setLoading(false)
        }
    }

    return (
        <Container className="d-flex align-items-center justify-content-center"
                style={{ minHeight: "100vh" }}>
            <div className="w-100" style={{ maxWidth: "400px" }}>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Log In</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required />
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" ref={passwordRef} required />
                        </Form.Group>
                        <Button disabled={loading} className="w-100" type="submit">Login</Button>
                    </Form>
                    <div className="w-100 text-center mt-3">
                        <Link to="/forgot-password">Forgot Password</Link>
                    </div>
                </Card.Body>
            </Card>
                <div className="w-100 text-center mt-2">
                    Need an account? <Link to="/signup">Sign Up</Link>
                    <p style={{color:'orange'}}>Please login to see rooms.</p>
                </div>
            </div>
      </Container>
    )
}
