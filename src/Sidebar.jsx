import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import CreateIcon from "@mui/icons-material/Create";
import InsertCommentIcon from "@mui/icons-material/InsertComment";

import SidebarOption from "./SidebarOption";
import { Add, Apps, BookmarkBorder, Drafts, ExpandLess, ExpandMore, FileCopy, Inbox, PeopleAlt } from "@mui/icons-material";
import db from "./firebase";
import { useStateValue } from "./StateProvider";


const Sidebar = () => {
    const [channels, setChannels] = useState([]);
    const[{ user }] = useStateValue();

    useEffect(() => {
        db.collection('rooms').onSnapshot(snapshot => (
            setChannels(
                snapshot.docs.map((doc) => (
                {
                id: doc.id ,
                name: doc.data().name ,
                }

            )))
        ));
    } , []);
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <div className="sidebar__info">
          <h2>Rakshit Agarwal</h2>
          <h3>
            <FiberManualRecordIcon  />
            {user?.displayName}
          </h3>
        </div>
            <CreateIcon/>
            
      </div>
      <SidebarOption Icon={InsertCommentIcon} title="Comment"/>
      <SidebarOption Icon={Inbox} title="Mention & reactions"/>
      <SidebarOption Icon={Drafts} title="Saved Items"/>
      <SidebarOption Icon={BookmarkBorder} title="Channel Brower"/>
      <SidebarOption Icon={PeopleAlt} title="People & User Groups"/>
      <SidebarOption Icon={Apps} title="Apps"/>
      <SidebarOption Icon={FileCopy} title="File browser"/>
      <SidebarOption Icon={ExpandLess} title="Show less"/>
      <hr />
      <SidebarOption Icon={ExpandMore} title="Channels"/>
      <hr />
      <SidebarOption Icon={Add} addChannelOption title="Add Channel"/>
      {/* This is helpful in connection in databse and add in channels tyo my app */}
      {/* SidebarOption */}
      {channels.map(channel => (
        <SidebarOption title={channel.name}  id={channel.id}/>
      ))}
    </div>
  );
};

export default Sidebar;
