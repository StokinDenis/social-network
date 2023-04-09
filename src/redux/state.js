import ava1 from './../image/ava1.jpg'
import ava2 from './../image/ava2.jfif'
import ava3 from './../image/ava3.jpg'
import {render} from "../render";

let state = {
    dialogsPage: {
        dialogData: [
            {name: "Kolya", id: "/1"},
            {name: "Kiryl", id: "/2"},
            {name: "Leha", id: "/3"},
            {name: "Anton", id: "/4"},
        ],
        messagesDate: [
            {message: "hello", id: 1},
            {message: "how are you?", id: 2},
            {message: "We'll meet tomorrow?", id: 3},
            {message: "Yes i can", id: 4},
        ]
    },
    friendState: [
        {avaFriend: ava1, nameFriend: "Alex"},
        {avaFriend: ava2, nameFriend: "Kolya"},
        {avaFriend: ava3, nameFriend: "Dimon"},
        {avaFriend: ava3, nameFriend: "Dimon"},
    ],
    profilePage: {
        informationInPosts: [
            {contentPost: "I like web development, like it if you like it too", likeCount: 35},
            {contentPost: "sometimes I can't keep up with my thoughts", likeCount: 74},
            {contentPost: "I once dreamed of an endless summer", likeCount: 23},
        ]
    },
}

export function addPost(contentPost, likeCount) {
    let info = {
        contentPost: contentPost,
        likeCount: likeCount,
    }
    state.profilePage.informationInPosts.push(info)
    render(state)
}


export default state;
