import "./topbar.css"
import { Search, Person, Chat, Notifications, Logout } from "@mui/icons-material"
import { useContext } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "../../context/AuthContext"

export default function Topbar() {

  const {user} = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <div className='topbarContainer'>
        <div className="topbarLeft">
          <Link to="/" className="textdeco">
          <span className="logo">StoryBook</span>
          </Link> 
        </div>
        <div className="topbarCenter">
          <div className="searchbar">
            <Search className="searchIcon"/>
            <input placeholder="Search for friend, post or video" className="searchInput" />
          </div>
        </div>
        <div className="topbarRight">
            <div className="topbarLinks">
                <span className="topbarLink">Homepage</span>
                <span className="topbarLink">Tiimeline</span>
                
            </div>
            <div className="topbarIcons">
              <div className="topbarIconItem">
                <Person/>
                <span className="topbarIconBadge">1</span>
              </div>
              <div className="topbarIconItem">
                <Chat/>
                <span className="topbarIconBadge">2</span>
              </div>
              <div className="topbarIconItem">
                <Notifications/>
                <span className="topbarIconBadge">1</span>
              </div>
            </div>

            <Link to={"/profile/${user.username}"}>
            <img src= 
            {user.profilePicture 
              ? PF + user.profilePicture
              : PF+"noAvatar.jpg"
            } 
            alt="" 
            className="topbarImg"/>
            </Link>
        </div>
    </div>
  )
}
