import React from "react";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";

const Education = () => {
  return (
    <div classname="container-fluid">
      <h1 className="port-font text-danger my-5">Education</h1>
      <Timeline style={{textAlign: 'justify '}} align="alternate">
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent data-aos="fade-up">
              <h5>SSC</h5>
              <small className="text-secondary">2013</small>
              <p>Mollartek Udayan School and College</p>
              <p className="portfolio-color mt-0">Result: GPA-5</p>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent data-aos="fade-right">
                <h5>HSC</h5>
              <small className="text-secondary">2015</small>
              <p>Admajee Cantonment College</p>
              <p className="portfolio-color mt-0">Result: GPA-5</p>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent data-aos="fade-up">
                <h5>BSc. in Computer Science and Engineering</h5>
              <small className=" text-secondary">2016-present</small>
              <p>Mawlana Bhashani Science and Technology University</p>
              <p className="portfolio-color mt-0">Result: GPA-3.2+</p>
          </TimelineContent>
        </TimelineItem>
        
      </Timeline>
    </div>
  );
};

export default Education;
