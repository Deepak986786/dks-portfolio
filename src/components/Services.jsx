import React , { useEffect, useRef} from "react";
import { DatabaseOutlined } from "@ant-design/icons";

const Services = () => {
  useEffect(()=>{
       const Observer= new IntersectionObserver((entries)=>{
        entries.forEach((entry)=>{
          if(entry.isIntersecting){
            entry.target.classList.add('active');
            }else{
              entry.target.classList.remove("active");
            }
        });
       }, {threshold : 0.5});

       Observer.observe(sectionRef.current);

       return ()=> Observer.disconnect();

  },[])
  const sectionRef=useRef(null);
  return (
    <>
      <div className="services fade-in"  ref={sectionRef}>
        <p>I am great at</p>
        <h3>Services I provide </h3>

        <hr style={{
          color:'white',
          width:'100%',
          border:'1px solid white',
          marginTop:'30px'
        }} />

        <div className="service-main">
          <div className="row">
            <div className="card">
              <div className="icon">
                <DatabaseOutlined style={{ fontSize: "32px" }} />
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
                <DatabaseOutlined style={{ fontSize: "32px" }} />
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
                <DatabaseOutlined style={{ fontSize: "32px" }} />
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
                <DatabaseOutlined style={{ fontSize: "32px" }} />
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
                <DatabaseOutlined style={{ fontSize: "32px" }} />
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
                <DatabaseOutlined style={{ fontSize: "32px" }} />
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
