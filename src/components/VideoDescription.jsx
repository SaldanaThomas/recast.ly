var VideoDescription = (videoData) => {
  console.log(videoData);
  const Title = videoData.title;
  const Description = videoData.description;
  const PublishedAt = videoData.publishedAt;
  const ChannelTitle = videoData.channelTitle;

  return (
    <div>
      <div>
        <h1>{Title}</h1>
      </div>
      <div>
        <h2>{Description}</h2>
      </div>
      <div>
        <h3>{ChannelTitle}</h3>
      </div>
      <div>
        <h4>{PublishedAt}</h4>
      </div>
    </div>
  );
};

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoDescription.propTypes = {
  video: PropTypes.object,
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default VideoDescription;
