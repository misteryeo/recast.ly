class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      currentVideo: window.exampleVideoData[0],
      videoList: window.exampleVideoData
    };
    this.state.videoList.onVideoClick = this.onVideoClick.bind(this);
  }
 
  onVideoClick (clickedVideo) {
    console.log('What is this', this);
    this.setState({
      currentVideo: clickedVideo, //set the clicked video to the current video
      videoList: window.exampleVideoData
    });
  }

  componentDidMount() {
    this.getYouTubeVideos('React');
  }

  getYouTubeVideos (query) {
    var options = {
      key: this.props.API_KEY,
      query: query,
      max: 5
    };

    this.props.searchYouTube (options, (videoList) => {
      this.setState({
        currentVideo: videoList[0],
        videoList: videoList
      });
    });
  }

  render() {
    console.log(this);
    console.log(this.state.currentVideo);
    return (
      <div>
        <Nav />
        <div className="col-md-7">
          <VideoPlayer video={this.state.currentVideo}/>
        </div>
        <div className="col-md-5">
          <VideoList videos={this.state.videoList}/>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
