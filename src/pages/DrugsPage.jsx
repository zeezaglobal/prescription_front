import React, { useState, useEffect } from 'react';
import { Card, Avatar, Flex, Switch } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

const actions = [
  <EditOutlined key="edit" />,
  <SettingOutlined key="setting" />,
  <EllipsisOutlined key="ellipsis" />,
];

const DrugsPage = () => {
  const [drug, setDrug] = useState({
    serialNumber: '',
    type: '',
    name: '',
    description: '',
    type_name: '',
    form: '',
  });

  const [drugs, setDrugs] = useState([]);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDrug(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // UseEffect to set dummy data
  useEffect(() => {
    const dummyData = [
      {
        id: 1,
        serialNumber: 101,
        type: 'Tablet',
        name: 'Paracetamol',
        description: 'Pain reliever and fever reducer.',
        type_name: 'Analgesic',
        form: 'Solid',
      },
      {
        id: 2,
        serialNumber: 102,
        type: 'Syrup',
        name: 'Ambroxol',
        description: 'Expectorant for cough.',
        type_name: 'Mucolytic',
        form: 'Liquid',
      },
      {
        id: 3,
        serialNumber: 103,
        type: 'Capsule',
        name: 'Omeprazole',
        description: 'Reduces stomach acid.',
        type_name: 'Proton Pump Inhibitor',
        form: 'Solid',
      },
    ];
    setDrugs(dummyData);
    setLoading(false);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newDrug = {
      ...drug,
      id: drugs.length + 1, // assign a dummy id
      serialNumber: parseInt(drug.serialNumber, 10) || 0
    };
    setDrugs(prev => [...prev, newDrug]);
    setMessage(`Drug "${drug.name}" added successfully.`);
    setDrug({
      serialNumber: '',
      type: '',
      name: '',
      description: '',
      type_name: '',
      form: '',
    });
  };

  return (
    <div className="container mt-5" style={{ maxWidth: '800px' }}>


      <div>
        <h4>All Drugs</h4>
        <Switch checked={!loading} onChange={checked => setLoading(!checked)} />
        <Flex gap="middle" align="start" wrap="wrap">
          {drugs.map(drug => (
            <Card
              key={drug.id}
              loading={loading}
              actions={actions}
              style={{ minWidth: 300 }}
            >
              <Card.Meta
         
                title={`${drug.name} (${drug.type})`}
                description={
                  <>
                    <p>Serial Number: {drug.serialNumber}</p>
                    <p>Type Name: {drug.type_name}</p>
                    <p>Form: {drug.form}</p>
                    <p>{drug.description}</p>
                  </>
                }
              />
            </Card>
          ))}
        </Flex>
      </div>
    </div>
  );
};

export default DrugsPage;
