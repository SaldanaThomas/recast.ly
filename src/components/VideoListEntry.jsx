var VideoListEntry = (props) => {
  const Title = props.video.snippet.title;
  const Description = props.video.snippet.description;
  const Thumbnail = props.video.snippet.thumbnails.default.url;

  return (
    <div className="video-list-entry media">
      <div className="media-left media-middle">
        <img className="media-object" src={Thumbnail} alt=""/>
      </div>
      <div className="media-body">
        <div className="video-list-entry-title" onClick={() => props.videoClick(props.video)}>{Title}</div>
        <div className="video-list-entry-detail">{Description}</div>
      </div>
    </div>
  );
};

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoListEntry.propTypes = {
  video: PropTypes.object.isRequired,
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default VideoListEntry;
