import React from "react";
import "./styles/header.css";
import HeaderOption from "./HeaderOption";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
          alt=""
        />
        <div className="header__search">
          <SearchIcon className="searchIcon" />
          <input type="text" />
        </div>
      </div>
      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title="home"/>
        <HeaderOption Icon={SupervisorAccountIcon} title="My Network"/>
        <HeaderOption Icon={BusinessCenterIcon} title="Jobs"/>
        <HeaderOption Icon={ChatIcon} title="Messaging"/>
        <HeaderOption Icon={NotificationsIcon} title="Notifications"/>
        <HeaderOption avatar="https://scontent.fisb20-1.fna.fbcdn.net/v/t39.30808-1/298227337_1755194054816698_6788526992634896176_n.jpg?stp=c0.8.50.50a_cp0_dst-jpg_p50x50&_nc_cat=100&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeF_chZxNg5lH1nhTTfsAPOHC8JapYKoq54LwlqlgqirnnsXgqNhMt_8PXUEe_nK3zVM0SnSxDtbXmA4dBBJJS6g&_nc_ohc=JNauWl8OgqUAX85wed5&_nc_ht=scontent.fisb20-1.fna&oh=00_AT-lXc74cLUuaQTA_ObtR8drFUHokXnUxhbFaa-ieO94jQ&oe=631FE258" title="Me"/>
      </div>
    </div>
  );
}

export default Header;
