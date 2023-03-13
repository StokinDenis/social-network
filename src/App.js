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

function App() {
  return (

    <div className="app-wrapper">
      <Header />
      <NavBar/>
      <div className="app-wrapper-content">
        <Routes>
       <Route path="/profile" element={<Profile/>} />
       <Route path="/dialog*" element={<Dialog/>} />
       <Route path="/news" element={<News/>}/>
       <Route path="/musicPage" element={<MusicPage/>}/>
       <Route path="/settingPage" element={<SettingPage/>}/>
       </Routes>
      </div>
    </div>

  );
}

export default App;
