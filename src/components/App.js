import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import useVideos from "../hooks/useVideos";

const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, search] = useVideos("buildings");
  //
  useEffect(() => {
    setSelectedVideo(videos[0]); // sets default video set in player
  }, [videos]);
  return (
    <div className="ui container">
      <SearchBar onTermSubmit={search} />{" "}
      {/* sets state for VideoList, passes props to SearchBar */}
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />{" "}
            {/* passes state to VideoDetail player */}
          </div>
          <div className="five wide column">
            <VideoList
              onVideoSelect={setSelectedVideo} // callback setState for VideoDetail from VideoItem
              videos={videos} // list of videos in VideoList
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
