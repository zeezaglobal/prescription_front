import { Layout, Menu, Button, Card, Typography } from 'antd';
import {
  DashboardOutlined,
  UserOutlined,
  FileTextOutlined,
  SettingOutlined,
  LogoutOutlined,
} from '@ant-design/icons';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css'; // Make sure this points to the final responsive CSS
import DashboardView from './DashboardComponents/DashboardView';
import PatientsView from './DashboardComponents/PatientsView';
import PrescriptionsView from './DashboardComponents/PrescriptionsView';
import SettingsView from './DashboardComponents/SettingsView';
const { Sider, Content } = Layout;
const { Title, Text } = Typography;

const Dashboard = () => {
  const navigate = useNavigate();
  const [selectedKey, setSelectedKey] = useState('2');
  const handleLogout = () => {
    localStorage.removeItem('jwt_token');
    navigate('/login');
  };
  const renderContent = () => {
    switch (selectedKey) {
      case '1':
        return <DashboardView />;
      case '2':
        return <PatientsView />;
      case '3':
        return <PrescriptionsView />;
      case '4':
        return <SettingsView />;
      default:
        return null;
    }
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
          selectedKeys={[selectedKey]}
          onClick={({ key }) => setSelectedKey(key)}
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
        <Content className="dashboard-content">{renderContent()}</Content>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
