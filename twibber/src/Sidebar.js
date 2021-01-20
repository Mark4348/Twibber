import React from "react";
import "./Sidebar.css";

import { Button } from "@material-ui/core";
import TwitterIcon from '@material-ui/icons/Twitter';
import SidebarOption from "./SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorderOutlined";
import ListAltIcon from "@material-ui/icons/ListAltOutlined";
import PermIdentityIcon from "@material-ui/icons/PermIdentityOutlined";
import MoreHorizIcon from "@material-ui/icons/MoreHorizOutlined"

function Sidebar() {
    return (
    <div className="sidebar">

        <TwitterIcon />

        <SidebarOption active Icon={HomeIcon} text="Home" />
        <SidebarOption Icon={SearchIcon} text="Explore" />
        <SidebarOption Icon={NotificationsNoneIcon} text="Notifications" />
        <SidebarOption Icon={MailOutlineIcon} text="Messages" />
        <SidebarOption Icon={BookmarkBorderIcon} text="Bookmarks" />
        <SidebarOption Icon={ListAltIcon} text="Lists" />
        <SidebarOption Icon={PermIdentityIcon} text="Profile" />
        <SidebarOption Icon={MoreHorizIcon} text="More" />
        <Button variant="outlined" className="sidebar__tweet" fullWidth>Tweet</Button>


    </div>
    );
}

export default Sidebar;