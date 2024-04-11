import React, { useState } from 'react';
import { Form, Radio, Button, Drawer, Row } from 'antd';
import './FilterForm.css'; // Import custom CSS file for styling
import filterimg from './filter2.png';

const FilterForm = ({ onSubmit }) => {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [form] = Form.useForm();

  const onFinish = (values) => {
    const selectedFuelType = values.fuelType;
    if (onSubmit && typeof onSubmit === 'function') {
      onSubmit(selectedFuelType); // Pass the selected fuel type to the parent component
    }
    // form.resetFields(); // Reset form fields
    setDrawerVisible(false); // Close the drawer after form submission
  };

  const showDrawer = () => {
    setDrawerVisible(true); // Show the drawer when Filter button is clicked
  };

  const onClose = () => {
    setDrawerVisible(false); // Close the drawer when Cancel button is clicked
  };

  return (
    <>
      <Row>
        <img src={filterimg} onClick={showDrawer} className="filimgsize" alt="filter icon" />
      </Row>
      
      <Drawer
        title="Select Fuel Type"
        placement="right"
        closable={false}
        onClose={onClose}
        visible={drawerVisible}
        width={500}
        className="custom-drawer"
      >
        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          className="fuel-form"
          width={500}
        >
          <Form.Item
            name="fuelType"
            rules={[
              {
                required: true,
                message: 'Please select a fuel type',
              },
            ]}
          >
            <Radio.Group className="fuel-radio-group">
              <Radio value="Petrol">Petrol</Radio>
              <Radio value="CNG">CNG</Radio>
              <Radio value="Diesel">Diesel</Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="btn btn-lg btn2 mr-2 submit-button">
              Apply Filter
            </Button>
          </Form.Item>
        </Form>
      </Drawer>
    </>
  );
};

export default FilterForm;