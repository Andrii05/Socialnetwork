import React from "react";
import s from './Post.module.css';

const Posts = (props) => {
    return (
        <div className={s.posts}>
            <div className={s.item}>
                <img
                    src='https://wmodel-kasting.novy.tv/wp-content/uploads/2019/02/d3addf4bdec519ab87612d15dc2e503a.jpg'/>
                <div> {props.message}</div>
                <div> {props.likesCount}</div>
            </div>
        </div>
    );
}
export default Posts;