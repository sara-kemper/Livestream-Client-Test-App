## Setup
1. Install FFMPEG.  Follow the instructions listed on this website: http://blog.gregzaal.com/how-to-install-ffmpeg-on-windows
2. Install Docker
3. Clone the respository listed below and install the dependencies 

```
git clone https://github.com/kyriesent/node-rtsp-stream.git
cd node-rtsp-stream
npm install (should pass all of the tests)
```


## Run docker image
``` docker run --rm -it -v $PWD/rtsp-simple-server.yml:/rtsp-simple-server.yml -p 8554:8554 aler9/rtsp-simple-server ```

## Run program (make sure you do it in this order)

1. Pick which camera you would like to use

``` ffmpeg -list_devices true -f dshow -i dummy ```
2. Run ffmpeg in the command prompt (not in powershell) and fill in the camera you want to stream on

```ffmpeg -rtbufsize 2000M -re -stream_loop -1 -f dshow -i video="<Fill in camera here>" -f rtsp -rtsp_transport tcp rtsp://localhost:8554/livestream ```

3. Run client (cd to client folder and write npm start)

4. cd to server and run ``` node index.js ```

## How does it work?

1. When you run the docker command you're creating an RTSP server.  This server allows you to stream data via rtsp.
2. When you run the ffmpeg command you are accessing the camera that you choose and telling it to transport the data via an rtsp url (rtsp://localhost:8554)
3. A library called node-rtsp-stream then receives the data from the rtsp url and converts it to another format called mpeg-ts. This must be done becasue jsmpeg-player can only receieve data via this format. It also creates a web socket and transmitts it to the front end.
4. On the front end, another library is used called jsmpeg-player, which connects to the web socket and then streams the data to the web.


