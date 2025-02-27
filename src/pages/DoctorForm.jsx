import React from 'react';
import { Form, Input, Button, Select, notification } from 'antd';

const { Option } = Select;

const DoctorForm = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    // handle the form submission logic here
    console.log('Form Values:', values);
    notification.success({
      message: 'Doctor Details Submitted',
      description: 'The details have been successfully submitted.',
    });
  };

  return (
    <div style={{ maxWidth: 600, margin: '0 auto', padding: '20px' }}>
      <h2>Doctor Details Form</h2>
      <Form
        form={form}
        name="doctor_details"
        onFinish={onFinish}
        initialValues={{
          specialization: 'Cardiology',
          licenseNumber: 'LIC12345',
          hospitalName: 'City Hospital',
          contactNumber: '+17056908327',
        }}
        layout="vertical"
      >
        <Form.Item
          name="specialization"
          label="Specialization"
          rules={[{ required: true, message: 'Please select your specialization!' }]}
        >
          <Select placeholder="Select specialization">
            <Option value="Cardiology">Cardiology</Option>
            <Option value="Neurology">Neurology</Option>
            <Option value="Orthopedics">Orthopedics</Option>
            <Option value="Pediatrics">Pediatrics</Option>
            {/* Add more options as needed */}
          </Select>
        </Form.Item>

        <Form.Item
          name="licenseNumber"
          label="License Number"
          rules={[{ required: true, message: 'Please input your license number!' }]}
        >
          <Input placeholder="Enter license number" />
        </Form.Item>

        <Form.Item
          name="hospitalName"
          label="Hospital Name"
          rules={[{ required: true, message: 'Please input your hospital name!' }]}
        >
          <Input placeholder="Enter hospital name" />
        </Form.Item>

        <Form.Item
          name="contactNumber"
          label="Contact Number"
          rules={[
            { required: true, message: 'Please input your contact number!' },
            {
              pattern: /^\+?[1-9]\d{1,14}$/,
              message: 'Please enter a valid phone number!',
            },
          ]}
        >
          <Input placeholder="Enter contact number" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default DoctorForm;
