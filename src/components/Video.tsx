const Video = () => {
   return (
      <>
         <video
            className="h-full w-full object-cover"
            muted
            autoPlay
            loop
            src="https://download-video-ak.vimeocdn.com/v3-1/playback/a278bb9c-996c-4760-8ca1-dd0abff308f7/83c745cf?__token__=st=1756666527~exp=1756670127~acl=%2Fv3-1%2Fplayback%2Fa278bb9c-996c-4760-8ca1-dd0abff308f7%2F83c745cf%2A~hmac=15a5c65cc75e9bcc6713b6a4ead121334a32b64625ce497ece51ca0982797ae0&r=dXMtd2VzdDE%3D"
            onContextMenu={(e) => e.preventDefault()}
            controls={false}
         ></video>
      </>
   );
};
export default Video;
