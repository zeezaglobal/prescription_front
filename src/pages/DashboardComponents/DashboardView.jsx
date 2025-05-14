import { Card, Typography, Calendar, Input, Spin, List, Avatar, Button } from 'antd';
import { useState } from 'react';

const { Title, Text } = Typography;
const { Search } = Input;

const DashboardView = () => {
  const [loading, setLoading] = useState(false);
  const [listLoading, setListLoading] = useState(false);
  const [data, setData] = useState([
    {
      title: 'Ant Design Title 1',
    },
    {
      title: 'Ant Design Title 2',
    },
    {
      title: 'Ant Design Title 3',
    },
    {
      title: 'Ant Design Title 4',
    },
    {
      title: 'Ant Design Title 5',
    },
    {
      title: 'Ant Design Title 6',
    },
    {
      title: 'Ant Design Title 7',
    },
    {
      title: 'Ant Design Title 8',
    },
  ]);
  const [displayCount, setDisplayCount] = useState(4);

  const onSearch = (value) => {
    setLoading(true);
    console.log('Searching:', value);

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  const loadMore = () => {
    setListLoading(true);
    setTimeout(() => {
      setDisplayCount((prev) => Math.min(prev + 2, data.length));
      setListLoading(false);
    }, 1000);
  };

  return (
    <div className="cards-container" style={{ flexDirection: 'column' }}>
      {/* Cards */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px' }}>
        <Card className="stat-card">
          <Text type="secondary">Total Patients</Text>
          <Title level={3} style={{ color: '#134e4a' }}>234,455</Title>
        </Card>

        <Card className="stat-card">
          <Calendar fullscreen={false} />
        </Card>

        <Card className="stat-card">
          <Text type="secondary">Placeholder</Text>
          <Title level={4}>Future Content</Title>
        </Card>
      </div>

      {/* Search Box */}
      <div style={{ marginTop: '32px', maxWidth: '600px' }}>
        <Search
          placeholder="Search patients, prescriptions..."
          enterButton="Search"
          size="large"
          onSearch={onSearch}
          loading={loading}
        />
        {loading && (
          <div style={{ marginTop: '16px', textAlign: 'center' }}>
            <Spin tip="Loading..." />
          </div>
        )}
      </div>

      {/* Load More List */}
      <div style={{ marginTop: '40px', maxWidth: '800px' }}>
        <Title level={4}>Notices & Updates</Title>
        <List
          itemLayout="horizontal"
          dataSource={data.slice(0, displayCount)}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />}
                title={<a href="https://ant.design">{item.title}</a>}
                description="Ant Design, a design language for background applications, is refined by Ant UED Team."
              />
            </List.Item>
          )}
        />
        {displayCount < data.length && (
          <div style={{ textAlign: 'center', marginTop: 16 }}>
            <Button onClick={loadMore} loading={listLoading}>
              Load More
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardView;
