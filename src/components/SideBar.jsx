import React from "react";
import "./styles/sideBar.css";
function SideBar() {
  const recentItem = (topic) => {
    return (
      <div className="sidebar__recentItem">
        <span className="sidebar__hashtag">#</span>
        <p>{topic}</p>
      </div>
    );
  };
  return (
    <div className="sideBar">
      <div className="sidebar__top">
        <img className = "sidebar__coverImg"
          src="https://img.freepik.com/premium-vector/multicolored-abstract-background_23-2148463672.jpg?w=2000"
          alt=""
        />
        <img className = "sidebar__avatar" src="https://scontent.fisb20-1.fna.fbcdn.net/v/t39.30808-1/298227337_1755194054816698_6788526992634896176_n.jpg?stp=c0.8.50.50a_cp0_dst-jpg_p50x50&_nc_cat=100&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeF_chZxNg5lH1nhTTfsAPOHC8JapYKoq54LwlqlgqirnnsXgqNhMt_8PXUEe_nK3zVM0SnSxDtbXmA4dBBJJS6g&_nc_ohc=JNauWl8OgqUAX85wed5&_nc_ht=scontent.fisb20-1.fna&oh=00_AT-lXc74cLUuaQTA_ObtR8drFUHokXnUxhbFaa-ieO94jQ&oe=631FE258" alt="" />
        <h2>Asher Ayub</h2>
        <h4>asherayub@gmail.com</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you?</p>
          <p className="sidebar__statNumber">2,435</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on post</p>
          <p className="sidebar__statNumber">1,721</p>
        </div>
      </div>
      <div className="sidebar__button">
        <p>Recent</p>
        {recentItem("reactJS")}
        {recentItem("webdev")}
        {recentItem("frontend")}
        {recentItem("programming")}
        {recentItem("javascript")}
        {recentItem("design")}
      </div>
    </div>
  );
}

export default SideBar;
