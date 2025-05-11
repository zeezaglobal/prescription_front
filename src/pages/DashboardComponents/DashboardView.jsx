import { Card, Typography } from 'antd';

const { Title, Text } = Typography;

const DashboardView = () => {
  return (
    <div className="cards-container">
      <Card className="stat-card">
        <Text type="secondary">Total Patients</Text>
        <Title level={3} style={{ color: '#134e4a' }}>234,455</Title>
      </Card>
      <Card className="stat-card"></Card>
      <Card className="stat-card"></Card>
    </div>
  );
};

export default DashboardView;
