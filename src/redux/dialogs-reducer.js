const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'ghggg'},
        {id: 3, message: 'Now is you name?'},
        {id: 4, message: 'ggg'},
        {id: 5, message: 'yo'},
        {id: 6, message: 'gggg'}
    ],
    dialogs: [
        {id: 1, name: 'jenya'},
        {id: 2, name: 'Anna'},
        {id: 3, name: 'Kate'},
        {id: 4, name: 'Ira'},
        {id: 5, name: 'Igor'},
        {id: 6, name: 'Ivan'}
    ],
    newMessageBody: 'erer'
}


const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {...state, newMessageBody: action.body};
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            let newMessages = [...state.messages, {id: 6, message: body}]
            debugger
            return {...state, messages: newMessages};
        default:
            return state;

    }

};

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body
})
export default dialogsReducer;