import React, { Component } from "react";
import JSMpeg from "@cycjimmy/jsmpeg-player";

export default class JsmpegPlayer extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     myRef: null,
  //   };
  // }

  // changeRef = (ref) => {
  //   this.setState({
  //     myRef: ref,
  //   });
  // };

  // scriptLoaded = () => {
  //   window.sort();
  // };

  componentDidMount() {
    let videoUrl = "ws://localhost:9999";
    let videoWrapper = document.getElementById("videoWrapper");
    new JSMpeg.VideoElement(videoWrapper, videoUrl);
  }
  render() {
    return (
      <div>
        <title>JSMpeg Stream Client</title>
        <div id="videoWrapper" style={{ width: "500px", height: "500px" }} />
      </div>
    );
  }
}
