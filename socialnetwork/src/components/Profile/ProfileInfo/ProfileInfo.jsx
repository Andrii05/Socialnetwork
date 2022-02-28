import React from 'react';
import s from './ProfileInfo.module.css';
import PreLoader from "../../Common/PreLoader/PreLoader";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <PreLoader/>
    }
    return (
        <div>
            <div className={s.discriptionBlock}>

                    <img  src={props.profile.photos.large}/>
                <span className={s.userDescription}>
                    <div>Name: {props.profile.fullName}</div>
                </span>
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
            </div>
        </div>
    )
        ;
}
export default ProfileInfo;
