import { Timeline } from "antd";
import React from "react";

const Experiance = () => {
  return (
    <>
      <div className="experiance">
        <h1>Experiance</h1>
        <Timeline
          mode="left"
          items={[
            {
              label: "August 2022 - Present",
              // dot:<img   src="https://awsmp-logos.s3.amazonaws.com/64fb680f-8ad7-4e16-8415-5ad32284f2ee/fa0fb7ef069595b8f8de4cc0cd81ea08.png" alt="icon"/>,
              children: (
                <>
                  <p>Software Engineer</p>
                  <p>Brillio Technologies</p>
                </>
              ),
              //   dot:(<>
              //     <div className="dot-div"></div>
              //   </>)
            },
            {
              label: "",
              children: "-",
            },
          ]}
        />
      </div>
    </>
  );
};

export default Experiance;
