var Search = ({searchHandler}) => (
  <div className="search-bar form-inline">
    <input onChange={(input) => searchHandler(input)}className="form-control" type="text" />
    <button className="btn hidden-sm-down" onClick={() => data.searchYouTube('Minecraft', data.searchClick)}>
      <span className="glyphicon glyphicon-search"></span>
    </button>
  </div>
);

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default Search;
