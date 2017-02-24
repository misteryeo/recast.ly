class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      currentVideo: window.exampleVideoData[0],
      videoList: window.exampleVideoData
    };
    this.getYouTubeVideos = _.debounce(this.getYouTubeVideos, 500);
  }
 
  onVideoClick (clickedVideo) {
    this.setState({
      currentVideo: clickedVideo
    });
  }

  componentDidMount() {
    this.getYouTubeVideos('Hack Reactor');
  }

  getYouTubeVideos (query) {
    var options = {
      key: this.props.API_KEY,
      query: query,
      max: 5
    };
    console.log(this.props.searchYouTube);
    console.log(query);
    this.props.searchYouTube(options, (videoList) => {
      console.log(videoList);
      this.setState({
        currentVideo: videoList[0],
        videoList: videoList
      });
    });
  }

  render() {
    return (
      <div>
        <Nav handleSearchInputChange={this.getYouTubeVideos.bind(this)}/>
        <div className="col-md-7">
          <VideoPlayer video={this.state.currentVideo}/>
        </div>
        <div className="col-md-5">
          <VideoList videos={this.state.videoList} onVideoClick={this.onVideoClick.bind(this)}/>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
