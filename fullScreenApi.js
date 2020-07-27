/*The Fullscreen API adds methods to present a specific Element (and its descendants)
 in full-screen mode, and to exit full-screen mode once it is no longer needed. 
 */
// declared globlal variables
let video = document.getElementById("catvideo1");

//fullscreen with enter key
document.addEventListener("keydown", function (e) {
  if (e.keyCode == 13) {
    videoFullScreen();
  }
}, false);

//fullscreen function
function videoFullScreen() {
  if (!document.fullscreenElement) {
    video.requestFullscreen();
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
}