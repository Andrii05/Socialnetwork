import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile =()=> {
    return ( <div className={s.bgprofile}>
            <div>
                <img src='https://i.pinimg.com/originals/4d/d5/e1/4dd5e17d9980833cabbc3f25e29181b5.jpg'/>
            </div>
            <div>
                Ava + description
            </div>
            <MyPosts/>
        </div>
    );
}
export default Profile;