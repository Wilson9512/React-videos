import React from "react";
import VideoItem from "./VideoItem";

//ES6改成以{}替代傳進來的參數名稱
//因此可以寫成{ videos }替代本來習慣命名為props的傳入參數並直接進到裡面的video
const VideoList = ({videos}) => {
    const renderedList = videos.map((video) => {
        return <VideoItem video={video} />
    });


    return <div className="ui relaxed divided list">{renderedList}</div>
};

export default VideoList;