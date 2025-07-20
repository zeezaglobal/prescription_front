import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Button, Modal, Form, Input, message, Popconfirm, Spin, Flex } from 'antd';
import { EditOutlined, DeleteOutlined, PlusOutlined } from '@ant-design/icons';
import 'bootstrap/dist/css/bootstrap.min.css';

const { Meta } = Card;

const DrugsPage = () => {
  const [drugs, setDrugs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [currentDrug, setCurrentDrug] = useState(null);
  const [form] = Form.useForm();

  //const apiBase = 'http://localhost:9090/api/drugs';
  const apiBase = 'https://indigorx.me/api/api/drugs';
  const fetchDrugs = async () => {
    setLoading(true);
    try {
      const res = await axios.get(apiBase);
      console.log('Fetched drugs:', res.data);
      setDrugs(Array.isArray(res.data) ? res.data : []);
    } catch (err) {
      console.error(err);
      message.error('Failed to load drugs');
      setDrugs([]); // ensure drugs is an array to prevent .map error
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDrugs();
  }, []);

  const showModal = (drug = null) => {
    setIsEdit(!!drug);
    setCurrentDrug(drug);
    if (drug) {
      form.setFieldsValue(drug);
    } else {
      form.resetFields();
    }
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setCurrentDrug(null);
    form.resetFields();
  };

  const handleSubmit = async () => {
    try {
      const values = await form.validateFields();
      if (isEdit && currentDrug) {
        // Update drug
        const updatedDrug = { ...currentDrug, ...values };
        await axios.post(`${apiBase}/add`, updatedDrug);
        message.success('Drug updated successfully');
      } else {
        // Add new drug
        await axios.post(`${apiBase}/add`, values);
        message.success('Drug added successfully');
      }
      fetchDrugs();
      handleCancel();
    } catch (err) {
      console.error(err);
      message.error('Failed to save drug');
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${apiBase}/${id}`);
      message.success('Drug deleted');
      fetchDrugs();
    } catch (err) {
      console.error(err);
      message.error('Failed to delete drug');
    }
  };

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h4>All Drugs</h4>
        <Button type="primary" icon={<PlusOutlined />} onClick={() => showModal()}>
          Add Drug
        </Button>
      </div>

      <Spin spinning={loading}>
        <Flex gap="middle" align="start" wrap="wrap">
          {Array.isArray(drugs) && drugs.map((drug) => (
            <Card
              key={drug.id}
              style={{ width: 300 }}
              actions={[
                <EditOutlined key="edit" onClick={() => showModal(drug)} />,
                <Popconfirm
                  title="Are you sure to delete this drug?"
                  onConfirm={() => handleDelete(drug.id)}
                  okText="Yes"
                  cancelText="No"
                >
                  <DeleteOutlined key="delete" />
                </Popconfirm>,
              ]}
            >
              <Meta
                title={`${drug.name} (${drug.type})`}
                description={
                  <>
                    <p>Serial: {drug.serialNumber}</p>
                    <p>Type Name: {drug.type_name}</p>
                    <p>Form: {drug.form}</p>
                    <p>{drug.description}</p>
                  </>
                }
              />
            </Card>
          ))}
        </Flex>
      </Spin>

      <Modal
        title={isEdit ? 'Edit Drug' : 'Add Drug'}
        open={isModalVisible}
        onCancel={handleCancel}
        onOk={handleSubmit}
        okText="Save"
      >
        <Form form={form} layout="vertical">
          <Form.Item
            label="Serial Number"
            name="serialNumber"
            rules={[{ required: true, message: 'Please enter serial number' }]}
          >
            <Input type="number" />
          </Form.Item>
          <Form.Item
            label="Type"
            name="type"
            rules={[{ required: true, message: 'Please enter type' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: 'Please enter name' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Description"
            name="description"
            rules={[{ required: true, message: 'Please enter description' }]}
          >
            <Input.TextArea />
          </Form.Item>
          <Form.Item
            label="Type Name"
            name="type_name"
            rules={[{ required: true, message: 'Please enter type name' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Form"
            name="form"
            rules={[{ required: true, message: 'Please enter form' }]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default DrugsPage;
