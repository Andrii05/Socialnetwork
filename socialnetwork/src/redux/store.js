import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {

        profilePage: {
            posts: [
                {id: 1, message: 'Hellow to everyone!', likesCount: '❤ 360'},
                {id: 2, message: 'It`s my first post', likesCount: '❤ 234'},
                {id: 3, message: 'Have a nice day!', likesCount: '❤ 123'}
            ],
            newPostText: 'New Post'
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Andrii'},
                {id: 2, name: 'Ann'},
                {id: 3, name: 'Dima'},
                {id: 4, name: 'Eva'},
                {id: 5, name: 'Roman'},
                {id: 6, name: 'Yaroslav'}
            ],
            messages: [
                {id: 1, message: 'Hello!'},
                {id: 2, message: 'What are you doing?'},
                {id: 3, message: 'I have'},
                {id: 4, message: 'Good lack!'},
                {id: 5, message: 'It`s nice'},
                {id: 6, message: 'Well done'}
            ],
            newMessageText: ''
        },
        sidebar: {}
    },
    getState() {
        return this._state;
    },
    callSubscriber() {
        console.log('State changed');
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callSubscriber(this._state);
    }
}

window.state = store;

export default store;