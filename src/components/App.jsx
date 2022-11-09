const {useState, useEffect} = React;
import Search from './Search.js';
import VideoPlayer from './VideoPlayer.js';
import VideoList from './VideoList.js';
import ExampleVideoData from '/src/data/exampleVideoData.js';
import searchYouTube from '/src/lib/searchYouTube.js';

const App = () => {
  const [data, setData] = useState([]);
  const [video, setVideo] = useState(ExampleVideoData[0]);

  const videoClick = (event) => {
    setVideo(event);
  };

  let timeout = null;

  const searchHandler = (event) => {
    console.log(`Event: ${event}`);
    let query = event.target.value;
    console.log(`Query: ${query}`);
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      searchYouTube(query, (videos => {
        setData(videos);
      }));
    }, 500);
  };

  // useEffect(() => {
  //   searchYouTube('react tutorials');
  // }, []);

  return (
    <div>
      <nav className="navbar">
        <div className="col-md-6 offset-md-3">
          <Search searchHandler={(input) => searchHandler(input)}/>
        </div>
      </nav>
      <div className="row">
        <div className="col-md-7">
          <VideoPlayer video={video}/>
        </div>
        <div className="col-md-5">
          <VideoList videos={data} videoClick={videoClick}/>
        </div>
      </div>
    </div>
  );
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;