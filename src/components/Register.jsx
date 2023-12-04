import React, {useState} from 'react'
import { Card, Form, Button } from 'react-bootstrap';
import Axios from 'axios';

const register = () => {

  
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    console.log(formData.username)
    console.log(formData.password)
    console.log(formData.email)

   
        Axios.post('https://node-mysql-api-2tg4.onrender.com/register', {
          username: formData.username,
          email: formData.email,
          password: formData.password
        }).then((response) => {
            console.log(response)
           
        })
       
    // You can add your registration logic here
  };
  return (
    <Card style={{ width: '300px', margin: 'auto', marginTop: '50px' }}>
      <Card.Body>
        <Card.Title>Register</Card.Title>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Register
          </Button>
        </Form>
      </Card.Body>
    </Card>
  )
}

export default register
