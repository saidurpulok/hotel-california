import React, { useState } from "react"
import { Card, Button, Alert } from "react-bootstrap"
import { useAuth } from '../contexts/AuthContext'
import { Link, useHistory } from "react-router-dom"
import { Container } from "reactstrap"
export default function Dashboard() {
    const[error, setError] = useState("")
    const { currentUser, logout } = useAuth()
    const history = useHistory()

    async function handleLogout() {
        setError('')

        try {
            await logout()
            history.push('/login')
        } catch {
            setError('Faild to log out')
        }
    }
    return (
        <Container className="d-flex align-items-center justify-content-center"
    style={{ minHeight: "100vh" }}>
      <div className="w-100" style={{ maxWidth: "400px" }}>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Dashboard</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <h3><strong>Your Email Address: </strong>{currentUser.email}. </h3><br />
                    <Link to="/" className="btn btn-primary w-100 mt-3">
                        Go to Homepage
                    </Link><br />
                    <Link to="/rooms" className="btn btn-primary w-100 mt-3">
                        View Rooms
                    </Link><br />
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                <Button variant="link" onClick={handleLogout}>
                    Log Out
                </Button>
            </div>
            </div>
            </Container>
    )
}
