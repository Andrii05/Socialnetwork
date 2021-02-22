import React from "react";
import s from './Post.module.css';

const Posts = () => {
    return (
        <div className={s.posts}>
            <div className={s.item}>
                <img
                    src='https://wmodel-kasting.novy.tv/wp-content/uploads/2019/02/d3addf4bdec519ab87612d15dc2e503a.jpg'/>
                post
                <div>
                    <span>Like</span>
                </div>
            </div>
        </div>
    );
}
export default Posts;