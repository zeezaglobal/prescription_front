import React from 'react';
import { Table, Tag, Space, Button } from 'antd';

const { Column } = Table;

const data = [
  {
    key: '1',
    name: 'John Brown',
    address: 'New York No. 1 Lake Park',
    email: 'john@example.com',
    phone: '123-456-7890',
    age: 32,
    tags: ['active'],
  },
  {
    key: '2',
    name: 'Jim Green',
    address: 'London No. 1 Lake Park',
    email: 'jim@example.com',
    phone: '987-654-3210',
    age: 42,
    tags: ['inactive'],
  },
  {
    key: '3',
    name: 'Joe Black',
    address: 'Sydney No. 1 Lake Park',
    email: 'joe@example.com',
    phone: '555-222-1111',
    age: 29,
    tags: ['new'],
  },
];

const PatientsView = () => {
  return (
    <div style={{ padding: 24 }}>
      <h2>Patients</h2>
      <Table dataSource={data} pagination={{ pageSize: 5 }}>
        <Column title="Name" dataIndex="name" key="name" />
        <Column title="Address" dataIndex="address" key="address" />
        <Column title="Email" dataIndex="email" key="email" />
        <Column title="Phone" dataIndex="phone" key="phone" />
        <Column title="Age" dataIndex="age" key="age" />
        <Column
          title="Tags"
          dataIndex="tags"
          key="tags"
          render={(tags) => (
            <>
              {tags.map((tag) => {
                let color = tag === 'inactive' ? 'volcano' : 'green';
                return (
                  <Tag color={color} key={tag}>
                    {tag.toUpperCase()}
                  </Tag>
                );
              })}
            </>
          )}
        />
        <Column
          title="Action"
          key="action"
          render={(_, record) => (
            <Space size="middle">
              <Button type="link">View</Button>
              <Button type="link">Edit</Button>
            </Space>
          )}
        />
      </Table>
    </div>
  );
};

export default PatientsView;
