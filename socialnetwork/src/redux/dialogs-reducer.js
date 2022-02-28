let ADD_MESSAGE = 'ADD_MESSAGE';

let initialState = {
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
        ]
}

const dialogsReducer = (state = initialState,action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 5,
                message: action.newMessageBody
            };
            return {
                    ...state,
                    messages: [...state.messages, newMessage],
            }
        default:
            return state;
    }
}

export const addMessageCreator = (newMessageBody) => ({type: ADD_MESSAGE,newMessageBody})

export default dialogsReducer;