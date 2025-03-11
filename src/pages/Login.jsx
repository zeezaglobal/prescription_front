import { Link, useNavigate } from 'react-router-dom';
import { Form, Input, Button, Card, Typography, message } from 'antd';
import axios from 'axios';

const { Title, Text } = Typography;

function Login() {
  const navigate = useNavigate();

  const onFinish = async (values) => {
    console.log('Input values:', values);
    try {
      // Send the login request to the API
      const response = await axios.post('http://localhost:8080/auth/login', {
        username: values.username,
        password: values.password,
      });

      // Handle success (you can store the token, if any, and redirect)
      if (response.status === 200) {
        message.success('Login successful');
        console.log('Output values:', response.data);
        localStorage.setItem('jwt_token', response.data);
        navigate('/doctorform'); // Redirect after successful login
      }
    } catch (error) {
      // Handle errors (e.g., invalid credentials)
      message.error('Login failed. Please check your username and password.');
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', background: '#f0f2f5' }}>
      <Card style={{ padding: 24, width: 300, textAlign: 'center', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
        <Title level={2}>Login</Title>
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item label="Username" name="username" rules={[{ required: true, message: 'Please enter your username!' }]}>
            <Input placeholder="Username" />
          </Form.Item>
          <Form.Item label="Password" name="password" rules={[{ required: true, message: 'Please enter your password!' }]}>
            <Input.Password placeholder="Password" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" block>Login</Button>
          </Form.Item>
        </Form>
        <Text>Don't have an account? <Link to="/register">Register</Link></Text>
      </Card>
    </div>
  );
}

export default Login;
