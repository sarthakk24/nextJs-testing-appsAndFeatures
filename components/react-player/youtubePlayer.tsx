import ReactPlayer from "react-player/youtube";

const YoutubePlayer = () => {
  return (
    <>
      <div className="pt-3">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=43HCYSXZ9GI"
          controls={true}
          light={true}
        />
      </div>
    </>
  );
};

export default YoutubePlayer;
