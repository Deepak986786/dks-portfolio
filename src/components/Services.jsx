import React from "react";
import { DatabaseOutlined } from "@ant-design/icons";
import { Divider } from "antd";

const Services = () => {
  return (
    <>
      <div className="services">
        <p>I am great at</p>
        <h3>Services I provide </h3>

        <Divider/>

        <div className="service-main">
          <div className="row">
            <div className="card">
              <div className="icon">
                <DatabaseOutlined   style={{fontSize: '32px'}}/>
              </div>
              <div className="card-body">
                <h3>Web development</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquam, consequuntur.
                </p>
              </div>
            </div>

            <div className="card">
              <div className="icon">
                <DatabaseOutlined  style={{fontSize: '32px'}}/>
              </div>
              <div className="card-body">
                <h3>Web Apps</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquam, consequuntur.
                </p>
              </div>
            </div>

            <div className="card">
              <div className="icon">
                <DatabaseOutlined  style={{fontSize: '32px'}}/>
              </div>
              <div className="card-body">
                <h3>Backend Services</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquam, consequuntur.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="card">
              <div className="icon">
                <DatabaseOutlined  style={{fontSize: '32px'}}/>
              </div>
              <div className="card-body">
                <h3>API Development</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquam, consequuntur.
                </p>
              </div>
            </div>

            <div className="card">
              <div className="icon">
                <DatabaseOutlined  style={{fontSize: '32px'}}/>
              </div>
              <div className="card-body">
                <h3>Database Applications</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquam, consequuntur.
                </p>
              </div>
            </div>

            <div className="card">
              <div className="icon">
                <DatabaseOutlined  style={{fontSize: '32px'}}/>
              </div>
              <div className="card-body">
                <h3>Web Design</h3>
                <p>Hey my name is deepak kumar singh</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
