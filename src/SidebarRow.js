import React from "react";
import "./SidebarRow.css";
import { Avatar } from "@material-ui/core";
function SidebarRow({ src, title, Icon }) {
  return (
    <div className="sidebarRow">
      {console.log("src", src)}
      {src && <Avatar src={src} />}
      {Icon && <Icon />}
      <h4>{title}</h4>
    </div>
  );
}

export default SidebarRow;
