import "./post.css"
import {MoreVert} from "@mui/icons-material"

export default function Post({post}) {
    console.log(post);
  return (
    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img className="postProfileImg" src="/assets/feed1.jpg" alt=""/>
                    <span className="postUsername">Daisy Audrey</span>
                    <span className="postDate">{post.date}</span>
                </div>
                <div className="postTopRight">
                    <MoreVert/>
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">{post?.desc}</span>
                <img className="postImg" src={post.photo} alt=""/>
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                <img className="likeIcon" src="assets/like1.jpg" alt=""/>
                <img className="likeIcon" src="assets/hrt.jpg" alt=""/>
                <span className="postlikeCounter">{post.like} people like it</span>
                </div>
                <div className="postBottomRight">
                    <span className="postCommentText">{post.comment} comments</span>
                </div>
            </div>
        </div>
    </div>
  )
}
