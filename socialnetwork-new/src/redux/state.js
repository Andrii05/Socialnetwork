const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';
let store = {
    _state: {

        profilePage: {
            posts: [
                {id: 1, message: 'Hellow to everyone!', likesCount: 2736},
                {id: 2, message: 'It`s my first post', likesCount : 103},
                {id: 3, message: 'Just do it!', likesCount: 12}
            ],

        },
        dialogsPage: {
            dialogs : [
                {id: 1, name: 'Dima'},
                {id: 2, name: 'Lida'},
                {id: 3, name: 'Roma'},
                {id: 4, name: 'Inna'}
            ],
            messages : [
                {id: 1, message: 'Hi!'},
                {id: 2, message: 'What about you?'},
                {id: 3, message: 'When will we meet?'},
                {id: 4, message: 'What are you doing?'}
            ],
            newMessageBody: ""
        }

    },
    _callSubscriber() {
        console.log('state changed');
    },

    getState() {
        return this._state;
    },
    subscibe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogsPage.newMessageBody = action.body;
            this._callSubscriber(this._state);
        } else if (action.type === SEND_MESSAGE) {
            let body = this._state.dialogsPage.newMessageBody;
            this._state.dialogsPage.newMessageBody = '';
            this._state.dialogsPage.messages.push({id: 5, message: body});
            this._callSubscriber(this._state);
        }
    }
}
export const addPostActionCreator= () => ({type: ADD_POST})

export const updateNewPostTextActionCreator= (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})

export const sendMessageCreator= () => ({type: SEND_MESSAGE})

export const updateNewMessageBodyCreator= (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body})


export default store;
window.store = store;
//store -OOP