import "./rightbar.css"
import {Users} from "../../dummyData";
import Online from "../online/Online";

export default function Rightbar({ user }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const HomeRightbar = () => {
    return(
      <>
      <div className="birthdayContainer">
            <img src="assets/gift.jpg" alt="" className="birthdayImg"/>
            <span className="birthdayText">
              <b>Pola Foster</b> and <b>3 other friends</b> have a birthday today
            </span>
          </div>
          <img src="assets/add2.jpg" alt="" className="rightbarAd"/>
          <h4 className="rightbarTitle">Online Friends</h4>
          <ul className="rightbarFriendList">
          {Users.map(u=>(
            <Online key={u.id} user={u}/>
          ))}
          </ul>
      </>
    );
  };

  const ProfileRightbar = () =>{ 
    return(
        <>
        <h4 className="rightbarTitle">User information</h4>
        <div className="rightbarInfo">
          <div className="profileInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">{user.city}</span>
          </div>
          <div className="profileInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">{user.from}</span>
          </div>
          <div className="profileInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">{user.relationship}</span>
          </div>
        </div>
        <h4 className="rightbarTitle">User friends</h4>
        <div className="rightbarFollwings">
          <div className="rightbarFollowing">
            <img src={`${PF}5.jpg`} alt="" className="rightFollowingImg"/>
            <span className="rightbarFollowingName">Peter Holden</span>
          </div>
          <div className="rightbarFollowing">
            <img src={`${PF}7.jpg`} alt="" className="rightFollowingImg"/>
            <span className="rightbarFollowingName">Anna Durden</span>
          </div>
          <div className="rightbarFollowing">
            <img src={`${PF}9.jpg`} alt="" className="rightFollowingImg"/>
            <span className="rightbarFollowingName">Ellie Kenn</span>
          </div>
          <div className="rightbarFollowing">
            <img src={`${PF}10.jpg`} alt="" className="rightFollowingImg"/>
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img src={`${PF}CurentProfile.jpeg`} alt="" className="rightFollowingImg"/>
            <span className="rightbarFollowingName">Ellie Carry</span>
          </div>
          <div className="rightbarFollowing">
            <img src={`${PF}feed11.jpg`} alt="" className="rightFollowingImg"/>
            <span className="rightbarFollowingName">Faruk Peter</span>
          </div>
          <div className="rightbarFollowing">
            <img src={`${PF}8.jpg`} alt="" className="rightFollowingImg"/>
            <span className="rightbarFollowingName">Subaki Thomas</span>
          </div>
          <div className="rightbarFollowing">
            <img src={`${PF}feed6.jpg`} alt="" className="rightFollowingImg"/>
            <span className="rightbarFollowingName">Andrew Kalo</span>
          </div>
          <div className="rightbarFollowing">
            <img src={`${PF}story4.jpg`} alt="" className="rightFollowingImg"/>
            <span className="rightbarFollowingName">Wohan Suffer</span>
          </div>
          <div className="rightbarFollowing">
            <img src={`${PF}feed5.jpeg`} alt="" className="rightFollowingImg"/>
            <span className="rightbarFollowingName">Melo Drew</span>
          </div>
        </div>
        </>
    );
  };

  return (
    <div className="rightbar">
        <div className="rightbarWrapper">
        {user ? <ProfileRightbar/> : <HomeRightbar/>}
        </div>
    </div>
  )
}
