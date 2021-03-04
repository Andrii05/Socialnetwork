import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            My Posts
            <div>
                <textarea> </textarea>
                <button>Add post</button>
            </div>
            <Post message='Hellow to everyone!' like='❤ 360'/>
            <Post message="It`s my first post" like='❤ 425'/>
            <Post message='Hellow to everyone!' like='❤ 360'/>
            <Post message="It`s my first post" like='❤ 425'/>
            <Post message='Hellow to everyone!' like='❤ 360'/>
            <Post message="It`s my first post" like='❤ 425'/>
            <Post message='Hellow to everyone!' like='❤ 360'/>
            <Post message="It`s my first post" like='❤ 425'/>
        </div>
    );
}
export default MyPosts;