import React from 'react';
import './App.css';
import Sidebar from "./Components/Sidebar/Sidebar";
import AnnouncementContainer from "./Components/AnnouncementList/AnnouncementContainer";
import {Route} from "react-router-dom";
import SearchContainer from "./Components/Search/SearchContainer";
import CreateAnnouncementContainer from "./Components/CreateAnnouncement/CreateAnnouncementContainer";
import EditAnnouncementContainer from "./Components/EditAnnouncement/EditAnnouncementContainer";

function App() {

  return (
    <div className="">
        <header>
            Announcement
        </header>
        <hr/>
        <Route path="/" exact>
            <SearchContainer/>
            <AnnouncementContainer/>
            <Sidebar/>
        </Route>
        <Route path="/create" exact>
            <CreateAnnouncementContainer />
        </Route>
        <Route path="/edit/:id?" exact>
                <EditAnnouncementContainer/>
        </Route>
    </div>
  );
}

export default App;
