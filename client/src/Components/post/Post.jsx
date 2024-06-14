import "./post.css"
import {MoreVert} from "@mui/icons-material";
import { useState, useEffect } from "react";
import axios from "axios";
import {format} from "timeago.js";
import { Link } from "react-router-dom";

export default function Post({ post }) {
    const [like,setLike] = useState(post.likes.length);
    const [isliked,setIsLiked] = useState(false);
    const [user,setUser] = useState({});
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    useEffect(()=>{
        const fetchUser = async () => {
        const res = await axios.get(`/users?userId=${post.userId}`);
        setUser(res.data)
         };
        fetchUser();
      },[post.userId]);

    const likeHandler =()=>{
        setLike(isliked ? like-1 : like+1)
        setIsLiked(!isliked)
    }
    
  return (
    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">

                    <Link to={`profile/${user.username}`}>
                    <img className="postProfileImg" 
                    src={user.profilePicture || PF+"noAvatar.jpg"} alt=""/>
                    </Link>

                    <span className="postUsername">
                        {user.username}
                        </span>
                        
                    <span className="postDate">people like you</span>
                </div>
                <div className="postTopRight">
                    <MoreVert/>
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">{post?.desc}</span>
                <img className="postImg" src={PF+post.img} alt=""/>
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                <img className="likeIcon" src={`${PF}like1.jpg`} onClick={likeHandler} alt=""/>
                <img className="likeIcon" src={`${PF}hrt.jpg`} onClick={likeHandler} alt=""/>
                <span className="postlikeCounter">{like} people like it</span>
                </div>
                <div className="postBottomRight">
                    <span className="postCommentText">{post.comment} comments</span>
                </div>
            </div>
        </div>
    </div>
  )
}
