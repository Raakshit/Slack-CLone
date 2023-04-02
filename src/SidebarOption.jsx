import React from "react";
import "./SidebarOption.css";
import { useNavigate  } from "react-router-dom";
import db from "./firebase";

const SidebarOption = ({ Icon, title ,id , addChannelOption }) => {

  const naviagte = useNavigate ();

  const selectChannel = () =>{
    if (id) {
        naviagte(`/room/${id}`);
    }
    else{
      naviagte(title);
    }
  };

  const addChannel = () =>{
    
    const channelName = prompt('Plaese Enter the channel Name');

    if (channelName) {
      db.collection('rooms').add({
        name: channelName ,
      });
    }
  };

  return (
    <div className="sidebarOption" onClick={addChannelOption ? addChannel : selectChannel}>
      {Icon && <Icon className="sidebarOption__icon" />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <h3 className="sidebarOption__channel">
          <span className="sidebarOption__hash">#</span> {title}
        </h3>
      )}
    </div>
  );
};

export default SidebarOption;
