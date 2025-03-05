// components/VideoPlayer.tsx
import ReactPlayer from "react-player";

interface VideoPlayerProps {
  url: string;
}

const VideoPlayer = ({ url }: VideoPlayerProps) => {
  return (
    <div className="max-h-[600px] w-full">
      <ReactPlayer url={url} controls width="100%" height="600px" />
    </div>
  );
};

export default VideoPlayer;