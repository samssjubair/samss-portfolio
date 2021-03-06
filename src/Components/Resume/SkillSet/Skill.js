import { Tooltip } from "@material-ui/core";
import React from "react";

const Skill = ({ skill }) => {
  return (
    <div className="col-lg-3 col-6  my-4">
      <Tooltip title={skill.name} placement="top">
        <img style={{ height: "48px" }} src={skill.img} alt="" />
      </Tooltip>
      
      
      
    </div>
  );
};

export default Skill;
