import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

let dialogData = [
    {name: "Kolya", id: "/1"},
    {name: "Kiryl", id: "/2"},
    {name: "Leha", id: "/3"},
    {name: "Anton", id: "/4"}
]
let messagesDate=[
    {message: "hello", id: 1},
    {message: "how are you?", id: 2},
    {message: "We'll meet tomorrow?", id: 3},
    {message: "Yes i can", id: 4}
]
let informationInPosts = [
    {contentPost: "I like web development, like it if you like it too", likeCount: 35},
    {contentPost: "sometimes I can't keep up with my thoughts", likeCount: 74},
    {contentPost: "I once dreamed of an endless summer", likeCount: 23},
]
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
    <App dialogData={dialogData} messageData={messagesDate} informationInPost={informationInPosts}/>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
