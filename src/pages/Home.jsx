import { Link } from 'react-router-dom';
import { Button, Card, Typography } from 'antd';

const { Title } = Typography;

function Home() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', background: '#f0f2f5' }}>
      <Card style={{ padding: 24, textAlign: 'center', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
        <Title level={2}>Welcome to Home Page</Title>
        <div style={{ marginTop: 20 }}>
          <Button type="primary" style={{ marginRight: 10 }}>
            <Link to="/login">Login</Link>
          </Button>
          <Button type="default">
            <Link to="/register">Register</Link>
          </Button>
        </div>
      </Card>
    </div>
  );
}

export default Home;
