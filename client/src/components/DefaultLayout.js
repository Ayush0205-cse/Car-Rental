import React from "react";
import { Menu, Dropdown, Button, Space , Row , Col } from "antd";
import {Link} from 'react-router-dom'

//For Common styling we use Bootstrap-cdn and for component we used antd
//This page is default layout for all our pages and main content will be render in div className = "content" tag
function DefaultLayout(props) {
    const user = JSON.parse(localStorage.getItem('user')) //Get current user
  const menu = (
    <Menu>
        <Menu.Item>
        <a
         
          href="/"
        >
          Home
        </a>
      </Menu.Item>
      <Menu.Item>
        <a
          
          href="/userbookings"
        >
          Bookings
        </a>
      </Menu.Item>
      <Menu.Item>
        <a
         
          href="/admin"
        >
          Admin
        </a>
      </Menu.Item>
      <Menu.Item onClick={()=>{
          localStorage.removeItem('user');
          window.location.href='/login'
      }}>
          <li style={{color:'orangered'}}>Logout</li>
      </Menu.Item>
    </Menu>
  );
  return (
    <div>
      <div className="header bs1">
          <Row gutter={16} justify='center'>
              <Col lg={20} sm={24} xs={24}>
              <div className="d-flex justify-content-between">
             <h1><b><Link className = "text-logo" to='/' >WanderWheels</Link></b></h1>

          <Dropdown className="hbutton" overlay={menu} placement="bottomCenter">
            <Button className="btn btn-outline-success">{user.username}</Button>
          </Dropdown>
        </div>
              </Col>
          </Row>
        
      </div>
      <div className="content">{props.children}</div>

      <div className="footer text-center">

           <p>Desinged and Developed By</p>

           

           <p>WanderWheels</p>
          
      </div>
    </div>
  );
}

export default DefaultLayout;
