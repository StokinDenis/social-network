import "./index.css";
import Dialog from './components/Dialog/Dialog';
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import MusicPage from './components/MusicPage/MusicPage'
import { Route, Routes} from "react-router-dom"
import React from "react";
import SettingPage from "./components/SettingPage/SettingPage";

function App(props) {
    return (

        <div className="app-wrapper">
            <Header />
            <NavBar informationFriend={props.state.friendState}/>
            <div className="app-wrapper-content">
                <Routes>
                    <Route path="/profile" element={<Profile informationInPost={props.state.profilePage.informationInPosts}/>} />
                    <Route path="/dialog*" element={<Dialog dialogData={props.state.dialogsPage.dialogData} messageData={props.state.dialogsPage.messagesDate}/>} />
                    <Route path="/news" element={<News/>}/>
                    <Route path="/musicPage" element={<MusicPage/>}/>
                    <Route path="/settingPage" element={<SettingPage/>}/>
                </Routes>
            </div>
        </div>

    );
}

export default App;