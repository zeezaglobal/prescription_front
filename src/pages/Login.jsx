import { Form, Input, Button, message } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';
import { useEffect } from 'react';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();
  const { login, token } = useAuth();

  useEffect(() => {
    if (token) {
      navigate('/dashboard', { replace: true });
    }
  }, [token, navigate]);

  const onFinish = async (values) => {
    try {
      const response = await axios.post('http://147.93.114.66:9090/auth/login', {
        username: values.username,
        password: values.password,
      });

      if (response.status === 200 && response.data.token && response.data.user?.username) {
        message.success('Login successful');
        login(response.data.token, response.data.user.id);
        navigate('/dashboard'); // navigate to dashboard
      } else {
        message.error('Invalid response from server.');
      }
    } catch {
      message.error('Login failed. Please check your credentials.');
    }
  };

  return (
    <div className="login-container">
      <Form
        name="login"
        onFinish={onFinish}
        className="login-form"
        layout="vertical"
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: 'Please input your email ID!' }]}
        >
          <Input
            size="large"
            prefix={<UserOutlined />}
            placeholder="Email ID"
          />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password
            size="large"
            prefix={<UserOutlined />}
            placeholder="Password"
          />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            size="large"
            block
          >
            Login
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
