import React from "react";
import ReactPlayer from "react-player";

interface VideoPlayerProps {
  url: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ url }) => {
  if (!url || !ReactPlayer.canPlay(url)) {
    return <div className="text-center text-white">Invalid or unsupported video URL.</div>;
  }

  return (
    <div className="max-h-[600px] w-full">
      <ReactPlayer
        url={url}
        controls
        width="100%"
        height="600px"
        config={{ file: { attributes: { controlsList: "nodownload" } } }}
      />
    </div>
  );
};

export default VideoPlayer;
