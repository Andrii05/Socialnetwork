import {profileAPI} from "../api/api";
import {toggleFollowingInProgress} from "./users-reducer";

let ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS'

let initialState = {
    posts: [
        {id: 1, message: 'Hellow to everyone!', likesCount: '❤ 360'},
        {id: 2, message: 'It`s my first post', likesCount: '❤ 234'},
        {id: 3, message: 'Have a nice day!', likesCount: '❤ 123'}
    ],
    profile: null,
    status: ""
}

const profileReducer = (state = initialState,action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: action.newPostText,
                likesCount: '❤ 0'
            }
            return {
                ...state,
                newPostText: '',
                posts: [...state.posts, newPost],
            }
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        default:
            return state;
    }
}
export const addPostCreator = (newPostText) => ({type: ADD_POST, newPostText})
const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
const setStatus = (status) => ({type: SET_STATUS, status})

export const getUserProfile = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingInProgress(true, userId));
            profileAPI.getProfile(userId).then(response => {
                dispatch(setUserProfile(response.data));
            });
        dispatch(toggleFollowingInProgress(false, userId));
    }
}

export const getStatus= (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId).then(response => {
            dispatch(setStatus(response.data));
        });
    }
}

export const updateStatus= (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status).then(response => {
            if (response.data.resultCode === 0) {
            dispatch(setStatus(status));
            }
        });
    }
}

export default profileReducer;