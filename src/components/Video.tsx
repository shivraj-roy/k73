import video from "../assets/k73_video.mp4";

const Video = () => {
   return (
      <>
         <video
            className="h-full w-full object-cover"
            muted
            loop
            autoPlay
            src={video}
            onContextMenu={(e) => e.preventDefault()}
            controls={false}
         ></video>
      </>
   );
};
export default Video;
