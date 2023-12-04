import React, { useState } from 'react';
import { Card, Form, Button } from 'react-bootstrap';

import Axios from 'axios'
import Home from './Home';
const login = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    password: '',
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
    console.log('Login submitted:', formData);
    // You can add your login logic here
    console.log(formData.username + ':', formData.password)
    Axios.post('https://node-mysql-api-2tg4.onrender.com/login', {
      username: formData.username,
      password: formData.password
    }).then((response) => {
      console.log(response)
      setIsLoggedIn(true)
    })
  };

  return (
    <div>
      {isLoggedIn ? (
        <Home/>
      ): (
        <>
        <Card style={{ width: '300px', margin: 'auto', marginTop: '50px' }}>
      <Card.Body>
        <Card.Title>Login</Card.Title>
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
            Login
          </Button>
        </Form>
      </Card.Body>
    </Card>
        </>
      )}
        
       
   
    
     </div>

  );
};

export default login;
