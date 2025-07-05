import React, { useEffect, useState } from 'react';
import { Table, Tag, Space, Button } from 'antd';
import api from '../../api/axios';
import { useAuth } from '../../context/AuthContext';

const { Column } = Table;

const PatientsView = () => {
  const { doctorId } = useAuth();
  const [patients, setPatients] = useState([]);
  const [pagination, setPagination] = useState({ current: 1, pageSize: 2, total: 0 });
  const [loading, setLoading] = useState(false);

  const fetchPatients = async (page = 1, pageSize = 2) => {
    if (!doctorId) return;
    setLoading(true);
    try {
      const res = await api.get(`/api/patients/doctor/${doctorId}`, {
        params: {
          page: page - 1, // API is 0-indexed
          size: pageSize,
          sort: 'firstName,asc',
        },
      });
      setPatients(res.data.content || []);
      setPagination({
        current: page,
        pageSize,
        total: res.data.totalElements || 0,
      });
    } catch (err) {
      setPatients([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPatients(pagination.current, pagination.pageSize);
    // eslint-disable-next-line
  }, [doctorId]);

  const handleTableChange = (pag) => {
    fetchPatients(pag.current, pag.pageSize);
  };

  return (
    <div style={{ padding: 24 }}>
      <h2>Patients</h2>
      <Table
        dataSource={patients.map((p, i) => ({ ...p, key: p.id || i }))}
        pagination={{
          current: pagination.current,
          pageSize: pagination.pageSize,
          total: pagination.total,
          showSizeChanger: true,
        }}
        loading={loading}
        onChange={handleTableChange}
      >
        <Column title="First Name" dataIndex="firstName" key="firstName" />
        <Column title="Last Name" dataIndex="lastName" key="lastName" />
        <Column title="Email" dataIndex="email" key="email" />
        <Column title="Phone" dataIndex="phone" key="phone" />
        <Column title="Age" dataIndex="age" key="age" />
        {/* Add more columns as needed */}
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
