var VideoPlayer = (props) => {
  const Title = props.video.snippet.title;
  const Description = props.video.snippet.description;
  const Thumbnail = props.video.snippet.thumbnails.default.url;
  const Video = props.video.id.videoId;
  console.log(props);

  return (
    <div className="video-player">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={Video} allowFullScreen></iframe>
      </div>
      <div className="video-player-details">
        <h3>{Title}</h3>
        <div>{Description}</div>
      </div>
    </div>
  );
};

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoPlayer.propTypes = {
  video: PropTypes.object,
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default VideoPlayer;
