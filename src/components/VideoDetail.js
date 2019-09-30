import React from "react";
//pulling props.selectedVideo off into  the conast name selectedVideo

    //
const VideoDetail = ({ selectedVideo }) => {
    if(!selectedVideo) return <h2>Loading Spinner goes here</h2>
    console.log(selectedVideo)
    

    const videoId = selectedVideo.id.videoId;
    const videoUrl = `https://www.youtube.com/embed/${videoId}?rel=0`;
    return (
        <>
        <div className="embed-responsive embed-responsive-16by9">
            <iframe className="embed-responsive-item" title={selectedVideo.snippet.title }src={videoUrl} allowFullScreen />
        </div>
        <h2>{selectedVideo.snippet.title}</h2>
        <p>{selectedVideo.snippet.description}</p>

        </>

    )
}

export default VideoDetail;