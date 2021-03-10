import React from 'react';

import s from './ProfileInfo.module.css';


const ProfileInfo = () => {
    return (
        <div>
            <div className={s.bgprofile}>
                <img src='https://i.pinimg.com/originals/4d/d5/e1/4dd5e17d9980833cabbc3f25e29181b5.jpg'/>
            </div>
            <div className={s.descriptionBlok}>
                Ava + description
            </div>
        </div>

    );
}
export default ProfileInfo;