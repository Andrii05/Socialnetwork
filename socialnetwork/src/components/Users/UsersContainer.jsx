import React from "react";
import {connect} from "react-redux";
import {
    getUsers,
    setCurrentPage,
    setUsersTotalCount, toggleFollowingInProgress,
    unFollowUser, followUser
} from "../../redux/users-reducer";
import Users from "./Users";
import PreLoader from "../Common/PreLoader/PreLoader";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanger = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
    }

    render() {
        return <>
            {this.props.isFetching ? <PreLoader/>
                : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanger={this.onPageChanger}
                   unFollowUser={this.props.unFollowUser}
                   followUser={this.props.followUser}
                   users={this.props.users}
                   followingInProgress={this.props.followingInProgress}/>
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
        toggleFollowingInProgress: state.usersPage.toggleFollowingInProgress,
        isAuth: state.auth.isAuth
    }
}


export default compose (
    withAuthRedirect,
    connect(mapStateToProps, {setCurrentPage, setUsersTotalCount, toggleFollowingInProgress,getUsers,unFollowUser, followUser})
)(UsersContainer)