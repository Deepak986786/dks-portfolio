import { Timeline } from "antd";
import React from "react";

const Education = () => {
  return (
    <>
      <div className="education">
        <h1>Education Center</h1>
        <Timeline
          mode="left"
          items={[
            {
              label: "August 2018 - June 2022",
              children: (
                <>
                  <p>Bachelor of Technology in CSE</p>
                  <p>Roorkee College of Engineering</p>
                </>
              ),
            },
            {
              label: "April 2016 - March 2017",
              children: (
                <>
                  <p>INTERMEDIATE</p>
                  <p>PRAYAG SENIOR SECONDARY SCHOOL</p>
                </>
              ),
            },
            {
              label: "2April 2014 - March 2015",
              children: (
                <>
                  <p>MATRICULATION</p>
                  <p>SUNSHINE RESENDENTIAL PUBLIC SCHOOL</p>
                </>
              ),
            },
          ]}
        />
      </div>
    </>
  );
};

export default Education;
