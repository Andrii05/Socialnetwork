import React from "react";
import userPhoto from "../../Assets/Images/userimage.png";
import s from "./Users.module.css";
import {NavLink, Redirect} from "react-router-dom";



let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p && s.selectedPage} onClick={(e) => {
                    props.onPageChanger(p);
                }}>{p}</span>
            })}
        </div>

        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                       <NavLink to={'/profile/' + u.id}><img src={u.photos.small != null ? u.photos.small : userPhoto}
                                                             className={s.usersPhoto}/></NavLink>
                    </div>
                    <div>
                        {u.followed ?
                            <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => { props.unFollowUser(u.id);
                            }}>Unfollow</button>
                            :
                            <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                props.followUser(u.id);
                            }}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div> {u.status}</div>
                    </span>
                    <span>
                        <div>"u.location.country"</div>
                        <div>"u.location.city"</div>
                    </span>
                </span>
            </div>)
        }
    </div>

}
export default Users;