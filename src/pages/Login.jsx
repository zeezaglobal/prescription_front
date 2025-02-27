import { Link, useNavigate } from 'react-router-dom';
import { Form, Input, Button, Card, Typography } from 'antd';

const { Title, Text } = Typography;

function Login() {
  const navigate = useNavigate();

  const onFinish = (values) => {
    // Handle your login logic here, e.g., validation, API call
    // After successful login, navigate to the form page
    navigate('/doctorform'); // Replace '/form' with your desired route
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
