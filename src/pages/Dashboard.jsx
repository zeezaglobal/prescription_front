import { Layout, Menu, Button, Card, Typography } from 'antd';
import {
  DashboardOutlined,
  UserOutlined,
  FileTextOutlined,
  SettingOutlined,
  LogoutOutlined,
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css'; // Make sure this points to the final responsive CSS

const { Sider, Content } = Layout;
const { Title, Text } = Typography;

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('jwt_token');
    navigate('/login');
  };

  return (
    <Layout className="dashboard-main">
      <Sider
        width={220}
        className="custom-sider"
        breakpoint="md"
        collapsedWidth="0"
        trigger={null}
      >
        <Menu
          mode="vertical"
          defaultSelectedKeys={['1']}
          className="custom-menu"
        >
          <Menu.Item key="1" icon={<DashboardOutlined />}>
            Dashboard
          </Menu.Item>
          <Menu.Item key="2" icon={<UserOutlined />}>
            Patients
          </Menu.Item>
          <Menu.Item key="3" icon={<FileTextOutlined />}>
            Prescriptions
          </Menu.Item>
          <Menu.Item key="4" icon={<SettingOutlined />}>
            Settings
          </Menu.Item>
        </Menu>

        <div className="logout-button-container">
          <Button
            type="primary"
            danger
            icon={<LogoutOutlined />}
            size="large"
            block
            onClick={handleLogout}
          >
            Logout
          </Button>
        </div>
      </Sider>

      <Layout>
        <Content className="dashboard-content">
          <div className="cards-container">
            <Card className="stat-card">
              <Text type="secondary">Total Patients</Text>
              <Title level={3} style={{ color: '#134e4a' }}>234,455</Title>
            </Card>
            <Card className="stat-card"></Card>
            <Card className="stat-card"></Card>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
