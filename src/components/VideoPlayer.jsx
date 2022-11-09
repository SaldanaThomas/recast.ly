import VideoDescription from './VideoDescription.js';

var VideoPlayer = ({video} = props.video) => {
  const Title = video.snippet.title;
  const Description = video.snippet.description;
  const Video = video.id.videoId;

  return (
    <div className="video-player">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={`https://www.youtube.com/embed/${Video}`} allowFullScreen></iframe>
      </div>
      <div className="video-player-details">
        <h3>{Title}</h3>
        <div><VideoDescription videoData={video.snippet}/></div>
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
