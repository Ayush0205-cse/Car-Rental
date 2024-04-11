import React from "react";
import { Row, Col, Form, Input } from "antd";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userRegister } from "../redux/actions/userActions";
import AOS from "aos";
import Spinner from "../components/Spinner";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();
function Register() {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.alertsReducer);

  function onFinish(values) {
    dispatch(userRegister(values));
    console.log(values);
  }

  return (
    <div className="login">
      {loading && <Spinner />}
      <Row gutter={16} className="d-flex align-items-center">
        <Col lg={16} style={{ position: "relative" }}>
          <img
            className="w-100"
            // data-aos="fade-up-left"
            data-aos="slide-left"
            data-aos-duration="1500"
            src = "https://i.pinimg.com/originals/dc/19/e9/dc19e9b94a372ebc21ffeb7623d5632a.png"
          />
          
        </Col>
        <h1 className="login-logo">WanderWheels</h1>
        <Col lg={8} className="text-left p-5">
          <Form
            layout="vertical"
            className="login-form p-5 logp"
            onFinish={onFinish}
          >
            <h1>Register</h1>
            <hr />
            <label for = "username" className = "fontSize">Username</label>
            <Form.Item
              name="username"
              label=""
              rules={[{ required: true }]}
            >
              <Input/>
            </Form.Item>
            <label for = "password" className = "fontSize">Password</label>
            <Form.Item
              name="password"
              label=""
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <label for = "cpassword" className = "fontSize">Confirm  Password</label>
            <Form.Item
              name="cpassword"
              label=""
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <hr/>

            <button className="btn-lg mt-2 btn btn-outline-success" style = {{width:100,borderWidth:2, margin:10}}>Register</button>
            <br />

            <Link to="/login">Click Here to Login</Link>
          </Form>
        </Col>
      </Row>
    </div>
  );
}

export default Register;

