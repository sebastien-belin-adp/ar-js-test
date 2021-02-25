// Multi Images WebAR-AR.js and Aframe

// Global Variable
var imagesNameArray=[];
var imagesURLArray=[];
var videosURLArray=[];
/*
window.onload = function() {
  AFRAME.registerComponent("videohandler", {
    init: function () {
      var marker = this.el;

      this.vid = document.querySelector("#vid");

      marker.addEventListener("markerFound", function () {
        this.vid.play();
      }.bind(this));

      marker.addEventListener("markerLost", function() {
        this.vid.pause();
        this.vid.currentTime = 0;
      }.bind(this));
    }
  });
};
*/
AFRAME.registerComponent("markers_start",{
  init:function(){
    console.log("Add images to the scene");

    var sceneEl = document.querySelector("a-scene");
    
    // List of the images
    for(var i = 0; i < 1; i++) {
      var url = "resources/nftls/img-" + i;
      // console.log(url);
      imagesURLArray.push(url);
      imagesNameArray.push("Marker_" + i);
      var videoUrl = "resources/videos/mov-" + i + ".mp4";
      // console.log(videoUrl);
      videosURLArray.push(videoUrl);
    }

    for(var k = 0; k < 1; k++) {

      // Adding assetsEl and videos for each elements in the list
      var assetsEl = document.createElement("a-assets");
    
      var videoEl = document.createElement("video");
      videoEl.setAttribute("id", "video_" + imagesNameArray[k]);
      videoEl.setAttribute("src", videosURLArray[k]);
      videoEl.setAttribute("response-type", "arraybuffer");
      videoEl.setAttribute("preload", "true");
      videoEl.setAttribute("allow", "autoplay");
      videoEl.setAttribute("autoplay", "true");
      videoEl.setAttribute("webkit-playsinline", "true");
      videoEl.setAttribute("playsinline", "true");
      videoEl.setAttribute("loop", "true");
      videoEl.setAttribute("muted", "true");
    
      assetsEl.appendChild(videoEl);
    
      sceneEl.appendChild(assetsEl);

      // Adding nft and videos for each elements in the list
      var aNftEl = document.createElement("a-nft");
      aNftEl.setAttribute("type", "nft");
      aNftEl.setAttribute("id", imagesNameArray[k]);
      aNftEl.setAttribute("url", imagesURLArray[k]);
      aNftEl.setAttribute("smooth", "true");
      aNftEl.setAttribute("smoothCount", "10");
      aNftEl.setAttribute("smoothTolerance", "0.01");
      aNftEl.setAttribute("smoothThreshold", "5");
      aNftEl.setAttribute("videohandler", "true");
      aNftEl.setAttribute("registerevents","");
    
      var aVideoEl = document.createElement("a-video");
      aVideoEl.setAttribute("src", "#video_" + imagesNameArray[k]);
      aVideoEl.setAttribute("position", "50 150 -100");
      aVideoEl.setAttribute("width", "300");
      aVideoEl.setAttribute("height", "175");
    
      aNftEl.appendChild(aVideoEl);
    
      sceneEl.appendChild(aNftEl);
    }
  }
});


// Detect marker found and lost
AFRAME.registerComponent("registerevents", {
  init: function () {
    const marker = this.el;

    marker.addEventListener("markerFound", () => {
      var markerId = marker.id;
      console.log("Marker Found: ", markerId);
    });

    marker.addEventListener("markerLost",() => {
      var markerId = marker.id;
      console.log("Marker Lost: ", markerId);
    });
  },
});
