import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import dialogsReducer from "./dialogs-reducer";



let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'hello, how are you ?', likesCount: 10},
                {id: 2, message: 'I am fine !', likesCount: 2},
            ],
            newPostText: ''

        },
        dialogsPage: {
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: ''},
                {id: 3, message: 'Now is you name?'},
                {id: 4, message: ''},
                {id: 5, message: 'yo'},
                {id: 6, message: ''}
            ],
            dialogs: [
                {id: 1, name: 'jenya'},
                {id: 2, name: 'Anna'},
                {id: 3, name: 'Kate'},
                {id: 4, name: 'Ira'},
                {id: 5, name: 'Igor'},
                {id: 6, name: 'Ivan'}
            ],
            newMessageBody: ''
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log('store.js ')
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },


    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

        this._callSubscriber(this._state);


    }
}





window.store = store
export default store;