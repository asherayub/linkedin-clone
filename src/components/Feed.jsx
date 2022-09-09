import React, { useEffect, useState } from "react";
import "./styles/feed.css";
import CreateIcon from "@mui/icons-material/Create";
import ImageIcon from "@mui/icons-material/Image";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import EventNoteIcon from "@mui/icons-material/EventNote";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";
import InputOption from "./InputOption";
import Post from "./Post";
function Feed() {
  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form action="">
            <input type="text" />
            <button type="submit">Send</button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOption Icon={ImageIcon} title="Photo" />
          <InputOption Icon={SubscriptionsIcon} title="Video" />
          <InputOption Icon={EventNoteIcon} title="Evnet" />
          <InputOption Icon={CalendarViewDayIcon} title="Write Article" />
        </div>
      </div>

      {/* posts */}
      <Post name="Asher" description="@asher.ayub" msg="hello guys!" />
      <Post
        name="Elon"
        description="@musk.elon"
        msg="Just launched StarLink satellites. Next update soon!"
      />
      <Post
        name="Jeff Bezos"
        description="@amazon.jeff"
        msg="If you double the number of experiments you do per year you're going to double your inventiveness."
      />
      <Post
        name="Bill Gates"
        description="@microsoft"
        msg="The belief that the world is getting worse, that we can't solve extreme poverty and disease, isn't just mistaken."
      />
      <Post
        name="Randy Orton"
        description="@wweOrton"
        msg="Feels nice being a @wwe champion once again. "
      />
    </div>
  );
}

export default Feed;
