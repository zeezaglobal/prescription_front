import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Form, Input, Button, Alert } from 'antd';
import axios from 'axios';

function Register() {
  const [message, setMessage] = useState(null);
  const [messageType, setMessageType] = useState(null);

  const onFinish = async (values) => {
    try {
        console.log('Posting to /auth/register with data:', {
            username: values.username,
            email: values.email,
            contact_number: values.phone,
            password: values.password,
          });
      const response = await axios.post('http://localhost:8080/auth/register', {
        username: values.username,
        email: values.email,
        contact_number: values.phone,
        password: values.password,
      });

      setMessage('Registration successful! Please log in.');
      setMessageType('success');
    } catch (error) {
      setMessage(error.response?.data?.message || 'Registration failed. Please try again.');
      setMessageType('error');
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px' }}>
      <h2>Register Page</h2>

      {message && <Alert message={message} type={messageType} showIcon style={{ marginBottom: '15px' }} />}

      <Form
        name="register"
        onFinish={onFinish}
        initialValues={{ remember: true }}
        layout="vertical"
      >
        <Form.Item
          name="username"
          label="Username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input placeholder="Username" />
        </Form.Item>

        <Form.Item
          name="email"
          label="Email"
          rules={[
            { required: true, message: 'Please input your email!' },
            { type: 'email', message: 'The input is not valid E-mail!' },
          ]}
        >
          <Input type="email" placeholder="Email" />
        </Form.Item>


        <Form.Item
          name="password"
          label="Password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password placeholder="Password" />
        </Form.Item>

        <Form.Item
          name="confirmPassword"
          label="Confirm Password"
          dependencies={['password']}
          hasFeedback
          rules={[
            { required: true, message: 'Please confirm your password!' },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error('The two passwords do not match!'));
              },
            }),
          ]}
        >
          <Input.Password placeholder="Confirm Password" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            Register
          </Button>
        </Form.Item>
      </Form>
      
      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
}

export default Register;
