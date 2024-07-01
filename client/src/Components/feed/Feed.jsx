import { useContext, useEffect, useState } from "react";
import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";

export default function Feed({ username }) {
  const [posts, setPosts] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const endpoint = username
          ? `/posts/profile/${username}`
          : `/posts/timeline/${user._id}`;
  
        const res = await axios.get(endpoint);
        console.log("Response data:", res.data); // Log response data for debugging
  
        // Sort posts by createdAt descending
        const sortedPosts = res.data.sort((p1, p2) =>
          new Date(p2.createdAt) - new Date(p1.createdAt)
        );
        setPosts(sortedPosts);
      } catch (error) {
        console.error("Error fetching posts:", error); // Log any errors for debugging
      }
    };
  
    fetchPosts();
  }, [username, user._id]);
  
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {posts.map((p) => (
          <Post key={p._id} post={p} />
        ))}
      </div>
    </div>
  );
}
