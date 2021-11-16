import React from 'react';
import s from './Friends.module.css'
import Post from "../../Profile/MyPosts/Post/Post";

const Friends = (props) => {
    return (<div>

            <div id={s.circle}></div>
            <div className={s.item}>Friend</div>

        </div>
    );
}
export default Friends;