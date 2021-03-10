import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postData = [
        {id: 1, message: 'Hellow to everyone!', likes: '❤ 360'},
        {id: 2, message: 'It`s my first post', likes: '❤ 425'}
    ]

    return (
        <div className={s.postItem}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea> </textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                <Post message={postData[0].message} likes={postData[0].likes}/>
                <Post message={postData[1].message} likes={postData[1].likes}/>
            </div>
        </div>
    );
}
export default MyPosts;