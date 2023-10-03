import React, { useContext } from "react";
import { ThemeContext } from "../themeContext/ThemeContext";

import "./userPage.scss";

import friends from "../../resources/friends.svg";
import home from "../../resources/home.svg";
import photo from "../../resources/photo.svg";
import message from "../../resources/message.svg";
import video from "../../resources/video.svg";
import follower from "../../resources/follower.svg";
import like from "../../resources/like.svg";

function UserPage(props) {
    const { darkMode } = useContext(ThemeContext);

    return (
        <main className={darkMode ? "main" : "main main__light"}>
            <div className="main__left">
                <div onClick={props.onEntrance} className="main__exit">Exit</div>
                <img className="main__avatar" src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="my avatar" />
                <h2 className="main__username">User Name</h2>
                <h3 className="main__mail">kiba@ukr.net</h3>
                <div className="main__social">
                    <div className="main__social-follow">
                        <a href="./"><img src={follower} alt="follow" />15K</a>
                    </div>
                    <div className="main__social-follow">
                        <a href="./"><img src={like} alt="like" />8K</a>
                    </div>
                </div>
                <ul className="main__nav">
                    <li className="main__nav-item active"><img src={home} alt="Home" /><span>Home</span></li>
                    <li className="main__nav-item"><img src={friends} alt="Friends" /><span>Friends</span></li>
                    <li className="main__nav-item"><img src={photo} alt="Photos" /><span>Photo</span></li>
                    <li className="main__nav-item"><img src={video} alt="Video" /><span>Video</span></li>
                    <li className="main__nav-item"><img src={message} alt="Messages" /><span>Messages</span></li>
                </ul>
            </div>
            <div className="main__right"></div>
        </main>
    );
}

export default UserPage;