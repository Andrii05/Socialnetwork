import React from "react";
import {addPostCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";



const mapStateTpProps = (state) => {
    return{
        posts: state.profilePage.posts,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addPost: (newPostText) => {
        dispatch(addPostCreator(newPostText))
    }
    }
}
const MyPostsContainer = connect(mapStateTpProps,mapDispatchToProps)(MyPosts);


export default MyPostsContainer;