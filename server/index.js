const Stream = require("./node-rtsp-stream");

stream = new Stream({
  name: "webcam_stream",
  streamUrl: "rtsp://localhost:8554/livestream",
  wsPort: 9999,
  ffmpegOptions: {
    "-r": 30,
  },
});
