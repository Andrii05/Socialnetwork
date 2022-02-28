import React from "react";
import s from './Post.module.css';


const Posts = (props) => {
    return (
        <div className={s.posts}>
            <div className={s.item}>
                <img
                    src='https://wilcity.com/wp-content/uploads/2020/06/115-1150152_default-profile-picture-avatar-png-green.jpg'/>
               <div> {props.message}</div>
                <div> {props.likesCount}</div>
            </div>
        </div>
    );
}
export default Posts;



