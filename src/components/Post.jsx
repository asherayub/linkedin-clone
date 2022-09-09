import React from 'react'
import "./styles/post.css"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ChatIcon from '@mui/icons-material/Chat';
import ShareIcon from '@mui/icons-material/Share';
import SendIcon from '@mui/icons-material/Send';
import InputOption from './InputOption';
function Post({name, description, msg, photoUrl}) {
  return (
    <div className="post">
        <div className="post__header">
            <AccountCircleIcon />
            <div className="post__info">
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
        </div>
        <div className="post__body">
            <p>{msg}</p>

        </div>
        <div className="post__buttons">
            <InputOption Icon = {ThumbUpIcon} title = "Like"  />
            <InputOption Icon = {ChatIcon} title = "Comment"  />
            <InputOption Icon = {ShareIcon} title = "Share"  />
            <InputOption Icon = {SendIcon} title = "Send"  />
        </div>
    </div>
  )
}

export default Post