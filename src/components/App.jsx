var App = (props) => {
  console.log(props.videoData);
  return (
    <div>
      <Nav />
      <div className="col-md-7">
        <VideoPlayer video={props.videoData[0]}/>
      </div>
      <div className="col-md-5">
        <VideoList videos={props.videoData}/>
      </div>
    </div>
  );
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
